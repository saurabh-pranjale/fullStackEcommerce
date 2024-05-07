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
    <div>
      <h1>Admin Panel</h1>
      <div className='w-[95%]  m-auto flex flex-row justify-center'>
      <div className='flex flex-wrap flex-row'>
        {data.map((p) => (
          <div key={p._id} className='m-5 flex flex-row border rounded p-4'>
            <Product p={p} />
            <div className='flex mt-2'>
              <Link to={`/admin/edit/${p._id}`} className='mr-2'> {/* Use Link component instead of button */}
                Edit
              </Link>
              <button onClick={() => handleDelete(p._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Admin;
