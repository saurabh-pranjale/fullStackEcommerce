import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link from react-router-dom
import Product from './Product';

const Admin = () => {
  const [data, setData] = useState([]);

  const navigate = useNavigate()

  useEffect(() => {
    axios.get('http://localhost:4000/products',{ headers:{
      Authorisation: "Bearer " + localStorage.getItem('jwt')
    }})
      .then((response) => setData(response.data.AllProduct))
      .catch((err) => {if(err.response.status == 401){navigate("/signin")} console.log("err",err) });
  }, []);

  const handleDelete = async (productId) => {
    try {
      await axios.delete(`http://localhost:4000/delete/${productId}`);
      console.log(`Deleting product with ID ${productId}`);
      // Remove the deleted product from the state
      setData(data.filter(product => product._id !== productId));
    } catch (error) {
      console.error('Error deleting product:', error);
      // Optionally, provide feedback to the user about the deletion failure
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
    <h1 className="text-3xl font-semibold mb-8 text-center">Admin Panel</h1>
    
    <Link to={'/admin/addProduct'}> <button className="bg-green-600 hover:bg-green-700 h-[40px] w-[40px] text-white text-sm px-4 py-2  border rounded-full">
          +
 </button></Link>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((p) => (
            <div key={p._id} className="bg-white m-auto rounded-lg shadow-md overflow-hidden">
                <Product p={p} />
                <div className="p-4">
                    <div className="flex justify-between items-center">
                        <Link to={`/admin/edit/${p._id}`} className="text-blue-500 hover:underline mr-2">
                            Edit
                        </Link>
                        <button onClick={() => handleDelete(p._id)} className="text-red-500 hover:underline">Delete</button>
                    </div>
                </div>
            </div>
        ))}
    </div>
</div>

  );
};

export default Admin;
