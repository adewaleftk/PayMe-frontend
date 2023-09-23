# PayMe

A Simple Banking Application

## Introduction

PayMe is your go-to platform for managing your finances seamlessly. Check balances, make deposits, withdraw cash, transfer funds, and review your transactions with ease. All transactions are protected by end-to-end encryption. Simplify your banking experience today!

## Features

- **Account Balance:** View your account balance in real-time.
- **Deposits:** Easily make deposits into your account.
- **Withdrawals:** Withdraw cash when you need it.
- **Funds Transfer:** Transfer money to other accounts securely.
- **Transaction History:** Keep track of all your transactions.
- **User Authentication:** Log in securely to access your account.
- **Logout:** Safely log out to protect your account.
- **Error Handling:** Receive clear error messages for any issues.
- **Responsive Design:** Enjoy a seamless experience on any device.

## Getting Started

To access and interact with the deployed application, follow these steps:

### 1. Visit the Deployed Application

Open your web browser and go to [PayMe](https://pay-me-frontend.vercel.app/).

### 2. Sign Up

On the landing page, you will be able to create a new account.

Fill in the required registration information, including your name, phone number email address, and password.

Click the "Register" button to create your account.

### 3. Log In

After successfully registering, you will be redirected to the login page automatically.

Enter the email address and password you used during registration.

Click the "Log In" button.

### 4. Access Your Dashboard

Upon successful login, you will be directed to your dashboard, where you can view your account balance, make deposits, withdraw funds, transfer money, and view your transaction history.

Explore the dashboard and enjoy using the banking application!.

## Testing the Backend API

You can interact with the backend API to test various functionalities of this project. Follow the steps below to get started:

### API Base URL

The API is hosted at the following base URL: https://payme-backend.onrender.com


## User Signup

To create a new account, you can send a POST request to the `/api/v1/auth/register` endpoint with the following JSON data:

```json
{
  "email": "your-email@example.com",
  "password": "your-password",
  "phoneNumber": "Your Phone Number",
  "firstName": "Your First Name",
  "lastName": "Your Last Name"
}
```

## User Login

To log in to your account, send a POST request to the `api/v1/auth/login` endpoint with your email and password:

```json
{
  "email": "your-email@example.com",
  "password": "your-password"
}
```

## Deposit

To make a deposit into your account using the API, send a POST request to the /api/v1/deposit endpoint with the following JSON data:

```json
{
  "amount": 100.00
}
```

## Withdraw

To withdraw funds from your account using the API, send a POST request to the /api/v1/withdraw endpoint with the following JSON

```json
{
  "amount": 50.00
}
```

## Transfer Funds

To transfer money to another account using the API, send a POST request to the /api/v1/transfer endpoint with the following JSON data:

```json
{
  "receiverAccountNumber": "recipient-account-number",
  "amount": 25.00
}
```

## Transaction History

To retrieve your transaction history using the API, send a GET request to the /api/v1/transaction-history endpoint. This will return a list of your recent transactions.

## Links

All relevant links are provided below:

Repository for Frontend codes: https://gitlab.com/walex4live1/PayMe-frontend
Repository for Backend codes: https://gitlab.com/walex4live1/PayMe-backend
Deployed Frontend link: https://pay-me-frontend.vercel.app/
API Base URL: https://payme-backend.onrender.com
