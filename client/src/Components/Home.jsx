import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Product from './Product';
import { useNavigate } from 'react-router-dom';




const Home = () => {
  const [data, setData] = useState([]);

  const navigate = useNavigate()
  useEffect(() => {
    // Check if the user is already logged in
    const jwtToken = localStorage.getItem('jwt');
    if (!jwtToken) {
      navigate('/signin');
    }
  }, [navigate]);

  
  useEffect(() => {

    axios.get('http://localhost:4000/products', {
      headers: {
        Authorisation: "Bearer " + localStorage.getItem('jwt')
      }
    }).then((response) => { setData(response.data.AllProduct) }).catch((err) => { if (err.response.status == 401) { navigate("/signin") } console.log("err", err) });


  }, [])

  return (
    <>

      <div className='flex flex-wrap justify-center w-full '>
        <div className=' w-[90%] flex flex-row content-center  justify-center'>
          {
            data.map((p, i) => {
              return (
                <>
                  <div className='m-5' key={p._id} >
                    <Product p={p} />
                  </div>

                </>
              )
            })
          }
        </div>
      </div>

    </>
  )
}

export default Home