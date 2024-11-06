use candid::{CandidType, Deserialize, Principal};
use ic_cdk_macros::{init, query, update};
use rand::Rng;
use std::collections::HashMap;

// Enums for user and account details
#[derive(Clone, CandidType, Deserialize)]
enum Gender {
    Male,
    Female,
    Other,
}

#[derive(Clone, CandidType, Deserialize)]
enum UserRole {
    Customer,
    BankStaff,
    Manager,
    Admin,
}

#[derive(Clone, CandidType, Deserialize)]
enum AccountType {
    Savings,
    Checking,
    FixedDeposit,
}

#[derive(Clone, CandidType, Deserialize)]
enum TransactionType {
    Deposit,
    Withdrawal,
    Transfer,
    BillPayment,
}

// Define structs for User, Account, and Transaction
#[derive(Clone, CandidType, Deserialize)]
struct UserProfile {
    id: Principal,
    role: UserRole,
    first_name: String,
    last_name: String,
    email: String,
    primary_contact: String,
    gender: Gender,
    date_of_birth: u64, // Timestamp for date of birth
    address: String,
}

#[derive(Clone, CandidType, Deserialize)]
struct Account {
    account_no: String,
    customer_id: Principal,
    account_type: AccountType,
    balance: i64,
    created_at: u64,
}

#[derive(Clone, CandidType, Deserialize)]
struct Transaction {
    transaction_id: String,
    account_no: String,
    transaction_type: TransactionType,
    amount: i64,
    timestamp: u64,
}

// Storage types
type Users = HashMap<Principal, UserProfile>;
type Accounts = HashMap<String, Account>;
type Transactions = HashMap<String, Transaction>;

// Initialize stable storage
#[init]
fn init() {
    let users: Users = HashMap::new();
    let accounts: Accounts = HashMap::new();
    let transactions: Transactions = HashMap::new();
    ic_cdk::storage::stable_save((&users, &accounts, &transactions))
        .expect("Failed to initialize storage");
}

// Register a new user
#[update]
fn register_user(
    first_name: String,
    last_name: String,
    email: String,
    primary_contact: String,
    gender: Gender,
    date_of_birth: u64,
) -> Result<Principal, String> {
    let caller = ic_cdk::caller();
    let (mut users, accounts, transactions) = ic_cdk::storage::stable_restore::<(Users, Accounts, Transactions)>()
        .expect("Failed to restore storage");

    if users.contains_key(&caller) {
        return Err("User already exists".to_string());
    }

    let profile = UserProfile {
        id: caller.clone(),
        role: UserRole::Customer,
        first_name,
        last_name,
        email,
        primary_contact,
        gender,
        date_of_birth,
        address: String::new(),
    };

    users.insert(caller.clone(), profile);
    ic_cdk::storage::stable_save((&users, &accounts, &transactions)).expect("Failed to save users");
    Ok(caller)
}

// Create a new account
#[update]
fn create_account(account_type: AccountType) -> Result<String, String> {
    let caller = ic_cdk::caller();
    let (users, mut accounts, transactions) = ic_cdk::storage::stable_restore::<(Users, Accounts, Transactions)>()
        .expect("Failed to restore storage");

    if users.get(&caller).is_none() {
        return Err("User not found".to_string());
    }

    let account_no = format!("{:06}", rand::thread_rng().gen_range(100000..999999));
    let account = Account {
        account_no: account_no.clone(),
        customer_id: caller.clone(),
        account_type,
        balance: 0,
        created_at: ic_cdk::api::time(),
    };

    accounts.insert(account_no.clone(), account);
    ic_cdk::storage::stable_save((&users, &accounts, &transactions)).expect("Failed to save accounts");
    Ok(account_no)
}

// Perform a transaction
#[update]
fn perform_transaction(
    account_no: String,
    transaction_type: TransactionType,
    amount: i64,
) -> Result<(), String> {
    let caller = ic_cdk::caller();
    let (users, mut accounts, mut transactions) = ic_cdk::storage::stable_restore::<(Users, Accounts, Transactions)>()
        .expect("Failed to restore storage");

    if let Some(account) = accounts.get_mut(&account_no) {
        match transaction_type {
            TransactionType::Deposit => {
                account.balance += amount;
            },
            TransactionType::Withdrawal => {
                if account.balance >= amount {
                    account.balance -= amount;
                } else {
                    return Err("Insufficient funds".to_string());
                }
            },
            _ => {
                return Err("Transaction type not supported".to_string());
            }
        }

        let transaction_id = format!("{:06}", rand::thread_rng().gen_range(100000..999999));
        let transaction = Transaction {
            transaction_id: transaction_id.clone(),
            account_no: account_no.clone(),
            transaction_type,
            amount,
            timestamp: ic_cdk::api::time(),
        };

        transactions.insert(transaction_id, transaction);
        ic_cdk::storage::stable_save((&users, &accounts, &transactions)).expect("Failed to save transactions");
        Ok(())
    } else {
        Err("Account not found".to_string())
    }
}

// Get user profile
#[query]
fn get_user_profile() -> Result<UserProfile, String> {
    let caller = ic_cdk::caller();
    let (users, _, _) = ic_cdk::storage::stable_restore::<(Users, Accounts, Transactions)>()
        .expect("Failed to restore storage");

    users.get(&caller).cloned().ok_or("User profile not found".to_string())
}

// Get account balance
#[query]
fn get_account_balance(account_no: String) -> Result<i64, String> {
    let (_, accounts, _) = ic_cdk::storage::stable_restore::<(Users, Accounts, Transactions)>()
        .expect("Failed to restore storage");

    accounts.get(&account_no)
        .map(|account| account.balance)
        .ok_or("Account not found".to_string())
}

// Get transaction history for an account
#[query]
fn get_transaction_history(account_no: String) -> Result<Vec<Transaction>, String> {
    let (_, _, transactions) = ic_cdk::storage::stable_restore::<(Users, Accounts, Transactions)>()
        .expect("Failed to restore storage");

    Ok(transactions.values()
        .filter(|tx| tx.account_no == account_no)
        .cloned()
        .collect())
}
