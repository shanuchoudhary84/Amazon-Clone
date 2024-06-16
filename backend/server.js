
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Products = require("./Products");
const Users = require("./Users");
const bcrypt = require("bcryptjs");
const Orders = require("./Orders");
const stripe = require("stripe")("sk_test_51PFgSDSF4YJihzeXO7AVb1tVpAutxEto1he3kzMPDgPE4h1xhgdgCQYMO59ccZl22XxYgKtsNFdaV6xsX76Atqvl00igbfirVq");

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());


// MongoDB connection URL
const connection_url = "mongodb+srv://shanuchoudhary91:Shanu7632@amazon.g5mxmmb.mongodb.net/Amazon?retryWrites=true&w=majority&appName=Amazon";

mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// API for adding a product
app.post('/products/add', async (req, res) => {
    try {
        const productDetail = req.body;
        const newProduct = await Products.create(productDetail);
        res.status(201).send(newProduct);
    } catch (error) {
        res.status(500).send("Failed to add product");
    }
});

// API for retrieving products
app.get("/products/get", async (req, res) => {
    try {
        const products = await Products.find();
        res.status(200).send(products);
    } catch (error) {
        res.status(500).send("Failed to fetch products");
    }
});

// API for user signup
app.post("/auth/signup", async (req, res) => {
    try {
        const { email, password, fullName } = req.body;
        const encrypt_password = await bcrypt.hash(password, 10);
        const user = await Users.findOne({ email: email });
        if (user) {
            res.status(400).send("Email already in use");
        } else {
            await Users.create({ email: email, password: encrypt_password, fullName: fullName });
            res.status(201).send("User created successfully");
        }
    } catch (error) {
        res.status(500).send("Signup failed");
    }
});

// API for user login
app.post("/auth/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await Users.findOne({ email: email });
        if (user && await bcrypt.compare(password, user.password)) {
            res.status(200).send(user);
        } else {
            res.status(400).send("Invalid email or password");
        }
    } catch (error) {
        res.status(500).send("Login failed");
    }
});

// API for payment
app.post("/payment/create", async (req, res) => {
    try {
        const total = req.body.amount;
        const payment = await stripe.paymentIntents.create({
            amount: total * 100,
            currency: "inr",
        });
        res.status(201).send({
            clientSecret: payment.client_secret,
        });
    } catch (error) {
        res.status(500).send("Failed to create payment intent");
    }
});



// API TO add ORDER DETAILS

app.post("/orders/add", (req, res) => {
    const products = req.body.basket;
    const price = req.body.price;
    const email = req.body.email;
    const address = req.body.address;
  
    const orderDetail = {
      products: products,
      price: price,
      address: address,
      email: email,
    };
  
    Orders.create(orderDetail, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log("order added to database >> ", result);
      }
    });
  });
  
  app.post("/orders/get", (req, res) => {
    const email = req.body.email;
  
    Orders.find((err, result) => {
      if (err) {
        console.log(err);
      } else {
        const userOrders = result.filter((order) => order.email === email);
        res.send(userOrders);
      }
    });
  });
  

app.listen(port, () => console.log('Server is running on port', port));
