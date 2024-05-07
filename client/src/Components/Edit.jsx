import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom'; 
import axios from 'axios';

const Edit = () => {
  const { _id } = useParams(); 
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);

  const navigation = useNavigate()

  useEffect(() => {
    const fetchProduct = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/products/${_id}`);
            console.log(response.data.uniqProduct)
            const { title, description, image, price } = response.data.uniqProduct; // Access response.data.data
            setTitle(title);
            setDescription(description);
            setImage(image);
            setPrice(price);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching product:', error);
            setLoading(false);
        }
    };

    fetchProduct();
  }, [_id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:4000/update/${_id}`, {
        title,
        description,
        image,
        price,
      });
      setMessage(response.data.message);
      navigation('/admin')
    } catch (error) {
      setMessage('Error updating product');
      console.error('Error updating product:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-8">
    <h2 className="text-3xl font-semibold mb-4">Edit Product</h2>
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
            <label htmlFor="title" className="block mb-2">Title:</label>
            <input
                id="title"
                className="w-full border-2 border-gray-300 p-2 rounded-md"
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
        </div>
        <div className="mb-4">
            <label htmlFor="description" className="block mb-2">Description:</label>
            <textarea
                id="description"
                className="w-full border-2 border-gray-300 p-2 rounded-md"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
        </div>
        <div className="mb-4">
            <label htmlFor="image" className="block mb-2">Image URL:</label>
            <input
                id="image"
                className="w-full border-2 border-gray-300 p-2 rounded-md"
                type="text"
                placeholder="Image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
            />
        </div>
        <div className="mb-4">
            <label htmlFor="price" className="block mb-2">Price:</label>
            <input
                id="price"
                className="w-full border-2 border-gray-300 p-2 rounded-md"
                type="number"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
        </div>
        <div>
            <button
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                type="submit"
            >
                Update Product
            </button>
        </div>
    </form>
    {message && <p>{message}</p>}
</div>
  );
};

export default Edit;
