import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/upload', { title, description, image, price },{
                headers:{
                  Authorisation: "Bearer " + localStorage.getItem('jwt')
                }});
            navigate('/admin')
            console.log(response.data);
            setTitle("");
            setDescription("");
            setImage("");
            setPrice("");

        } catch (error) {
            console.error(error);
    
        }
    };
  return (
    <div className="container mx-auto p-8">
    <h2 className="text-3xl font-semibold mb-4">Add Product</h2>
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
            <input
                className="w-full border-2 border-gray-300 p-2 rounded-md"
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
        </div>
        <div className="mb-4">
            <input
                className="w-full border-2 border-gray-300 p-2 rounded-md"
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
        </div>
        <div className="mb-4">
            <input
                className="w-full border-2 border-gray-300 p-2 rounded-md"
                type="text"
                placeholder="Image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
            />
        </div>
        <div className="mb-4">
            <input
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
                Add Product
            </button>
        </div>
    </form>
</div>
  )
}

export default AddProduct