const dbConnect = require('../config/database');
const Products = require('../model/productsModel');

dbConnect();

exports.prodo = async (req, res) => {
    try {
        const newProduct = new Products(req.body);
        const result = await newProduct.save();
        res.status(201).json({ msg: "Product added !", result });
    } catch (error) {

        console.error("Error adding Product:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}


exports.getProducts = async (req,res) => {
    try {
        const AllProduct = await Products.find({});
        return res.status(200).json({ msg: "Good", AllProduct });
    } catch (error) {

        console.error("Error getting Product:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

exports.getUniqProduct = async (req, res) => {
    try {
        const { id } = req.params;
      
        const uniqProduct = await Products.findOne({_id:id});
        console.log(uniqProduct)
        return res.status(200).json({ msg: "Good", uniqProduct });
    } catch (error) {
        console.error("Error getting Product:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}


exports.updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, image, price } = req.body; 

        const updatedProduct = await Products.findByIdAndUpdate(
            id,
            { title, description, image, price, updatedAt: Date.now() }, 
            { new: true } 
        );

        if (!updatedProduct) {
            return res.status(404).json({ success: false, message: 'Product not found' });
        }

        res.status(200).json({
            success: true,
            data: updatedProduct,
            message: 'Updated Successfully',
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            error: err.message,
            message: 'Server Error',
        });
    }
};



exports.deleteProduct = async (req, res) => {
    try {
      const { id } = req.params;
      await Products.findByIdAndDelete(id);
      res.json({ message: 'Products deleted successfully' });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };