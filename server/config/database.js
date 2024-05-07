const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const dbConnect = () => {
    mongoose.Promise = global.Promise; 

    mongoose.connect(process.env.DATA_BASE)
    .then(() => console.log("DB Connection is Successful"))
    .catch(error => {
        console.log("Issue in DB Connection");
        console.error(error.stack); 
        process.exit(1);
    });
}

module.exports = dbConnect;