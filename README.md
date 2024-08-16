# Amazon Clone using MERN Stack with Stripe Integration

Welcome to the **Amazon Clone** project! This application mimics the core functionalities of the popular e-commerce platform Amazon. Built using the MERN (MongoDB, Express.js, React.js, Node.js) stack, it also integrates **Stripe** for seamless and secure payment processing.

## 📚 Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Setup](#setup)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## 🚀 Introduction

The **Amazon Clone** project aims to replicate key features of the Amazon website, providing an engaging and interactive e-commerce experience. With the MERN stack powering the backend and frontend, and Stripe handling secure payments, this project offers:

- **User Authentication**: Secure sign up, log in, and log out.
- **Product Browsing**: Efficient search and filtering.
- **Shopping Cart**: Manage and review cart items.
- **Checkout Process**: Smooth and secure checkout with Stripe.

## ✨ Features

- **🔒 User Authentication**: Secure sign up, log in, and log out with bcrypt password hashing.
- **🛒 Product Browsing**: Browse, search, and filter products.
- **📦 Product Details**: Detailed view of product information.
- **🛍️ Shopping Cart**: Add, adjust, and remove items from your cart.
- **💳 Checkout Process**: Seamless checkout with Stripe for payments.

## 🔧 Setup
To get this project up and running on your local machine, follow these steps:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/amazon-clone.git
   cd amazon-clone
   cd client
   npm install
   cd ../server
   npm install
2. **Create a .env file in the server directory and define the following variables:**
    ```bash
   MONGODB_URI=<your_mongodb_uri>
   BCRYPT_SALT_ROUNDS=<your_bcrypt_salt_rounds>
   STRIPE_SECRET_KEY=<your_stripe_secret_key>
4. **Start MongoDB Server**
5. **start the server**
   ```bash
   cd server
   npm start
6. **Start the Client**
   ```bash
   cd ../client
   npm start

## 🛠️ Usage
After setting up, you can access the application in your web browser. Here's how to navigate:

1. **Sign Up / Log In: Create a new account or log in.**
2. **Browse Products: Use the search or category filters.**
3. **View Product Details: Click on a product to see more information.**
4. **Add to Cart: Manage your cart and proceed to checkout.**
5. **Checkout: Enter shipping and payment details, and place your order securely with Stripe.**

## 🤝 Contributing
We welcome contributions! To contribute:
1. **Fork the Repository and create a new branch.**
2. **Make Changes and test thoroughly.**
3. **Follow Coding Conventions and style guides.**
4. **Submit a Pull Request with a clear description of changes.**

## 📝 License
This project is licensed under the MIT License.



    



