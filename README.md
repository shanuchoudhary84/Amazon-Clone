Amazon Clone using MERN Stack with Stripe Integration
Welcome to the Amazon Clone project! This application mimics the core functionalities of the popular e-commerce platform Amazon. Built using the MERN (MongoDB, Express.js, React.js, Node.js) stack, it also integrates Stripe for seamless and secure payment processing.

📚 Table of Contents
Introduction
Features
Setup
Usage
Contributing
License
🚀 Introduction
The Amazon Clone project aims to replicate key features of the Amazon website, providing an engaging and interactive e-commerce experience. With the MERN stack powering the backend and frontend, and Stripe handling secure payments, this project offers:

User Authentication: Secure sign up, log in, and log out.
Product Browsing: Efficient search and filtering.
Shopping Cart: Manage and review cart items.
Checkout Process: Smooth and secure checkout with Stripe.
✨ Features
🔒 User Authentication: Secure sign up, log in, and log out with bcrypt password hashing.
🛒 Product Browsing: Browse, search, and filter products.
📦 Product Details: Detailed view of product information.
🛍️ Shopping Cart: Add, adjust, and remove items from your cart.
💳 Checkout Process: Seamless checkout with Stripe for payments.
🔧 Setup
To get this project up and running on your local machine, follow these steps:

Clone the Repository

bash
Copy code
git clone https://github.com/shanuchoudhary84/amazon-clone.git
Navigate to the Project Directory

bash
Copy code
cd amazon-clone
Install Dependencies

Navigate to the client and server directories and install dependencies:

bash
Copy code
cd client
npm install
cd ../server
npm install
Set Up Environment Variables

Create a .env file in the server directory and define the following variables:

makefile
Copy code
MONGODB_URI=<your_mongodb_uri>
BCRYPT_SALT_ROUNDS=<your_bcrypt_salt_rounds>
STRIPE_SECRET_KEY=<your_stripe_secret_key>
Start MongoDB Server

Start the Server

bash
Copy code
cd server
npm start
Start the Client

bash
Copy code
cd ../client
npm start
🛠️ Usage
After setting up, you can access the application in your web browser. Here's how to navigate:

Sign Up / Log In: Create a new account or log in.
Browse Products: Use the search or category filters.
View Product Details: Click on a product to see more information.
Add to Cart: Manage your cart and proceed to checkout.
Checkout: Enter shipping and payment details, and place your order securely with Stripe.
🤝 Contributing
We welcome contributions! To contribute:

Fork the Repository and create a new branch.
Make Changes and test thoroughly.
Follow Coding Conventions and style guides.
Submit a Pull Request with a clear description of changes.
📝 License
This project is licensed under the MIT License.
