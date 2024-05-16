import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Product from './Product';
import Paginator from 'react-hooks-paginator';
import { useNavigate } from 'react-router-dom';




const Home = () => {
  const pageLimit = 10;

  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [currentData, setCurrentData] = useState([]);
  


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

  useEffect(() => {
    setCurrentData(data.slice(offset, offset + pageLimit));
  }, [offset, data]);

  return (
    <>

<div className='flex justify-center'>
        <input
          type="text"
          // value={searchQuery}
          // onChange={handleSearch}
          placeholder="Search Products"
          className="p-2 border border-gray-300 rounded-md mr-2"
        />
        <button  className="px-4 py-2 bg-blue-500 text-white rounded-md">Search</button>
      </div>

      <div className='flex flex-wrap justify-center w-full '>
        <div className=' w-[90%] flex flex-wrap flex-row content-center  justify-center'>
          {
            currentData.map((p, i) => {
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
      <Paginator
        totalRecords={data.length}
        pageLimit={pageLimit}
        pageNeighbours={2}
        setOffset={setOffset}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  )
}

export default Home