const express = require('express');
const { signup, signin, } = require('./Controller/user');
const cookieParser = require('cookie-parser');
const dbConnect = require('./config/database');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const { prodo, getProducts, deleteProduct, updateProduct, getUniqProduct } = require('./Controller/products');
const { auth } = require('./middlewares/auth');


// Load environment variables
dotenv.config();

// Create Express app
const app = express();

// Connect to database
dbConnect();

// Middleware to parse JSON and URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser())
app.use(cors())

// Define routes
app.post('/signup', signup);
app.post('/signin',signin);
app.post('/upload',auth,prodo);
app.delete('/delete/:id',deleteProduct);
app.put('/update/:id',updateProduct);
app.get('/products',auth,getProducts);
app.get('/products/:id',getUniqProduct);


// Define default route
app.get('/', (req, res) => {
    res.send('<h1>Hello Minister</h1>');
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});