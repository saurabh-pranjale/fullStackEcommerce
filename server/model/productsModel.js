const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            required: true,
            trim: true
        },
        image: {
            type: String,
            required: true,
        },
        gallary: [
            {
                type: String,
            }
        ],
        price: {
            type: Number,
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('Products', productsSchema)