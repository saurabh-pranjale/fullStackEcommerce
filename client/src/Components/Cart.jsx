import React, { useEffect, useState } from 'react'
import CartItems from './CartItems'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Cart = () => {
  const {cart} = useSelector((state)=> state )
  const [alltotalAmount,setAllTotalAmount] = useState(0)
  const [shippingCharge, setShippingCharge] = useState(0);

  
  useEffect(() => {
    let price = 0;
    cart.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
    setAllTotalAmount(price);
  }, [cart]);

  useEffect(() => {
    if (alltotalAmount <= 499) {
      setShippingCharge(80);
    
    } else{
      setShippingCharge(0);
    }
  }, [alltotalAmount]);
 
 
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])
  return (
    <div>
    {
      cart.length > 0  ? 
      (<div className=" h-auto my-12 md:w-[90%]  m-auto relative flex flex-col  md:flex-row justify-center ">
  
  
               
             
        <div className=" md:w-[45%] my-2 w-[95%] border-2 m-auto border-black">
        <h1 className=" py-4 w-[98%] m-auto text-xl ml-2 font-mono font-extrabold">MY BAG</h1>
       
          {
              
            cart.map( (item,index) => {
              return <CartItems key={item.id} item={item} itemIndex={index} />
            } )
          }
          <p className=" py-2 ml-2 font-bold">Sub Total: <span className="font-normal"> ${alltotalAmount} </span></p>
        </div>
  
        <div className=" border-2 border-black md:w-[40%] m-auto w-[95%] h-[20rem]  mt-2">
          <section className="w-[94%]   m-auto my-1">
    <h1 className="bg-white py-2 font-extrabold text-xl">Total</h1>
    <hr class="h-px my-2 bg-gray-300 border-0 "></hr>
          <div className="py-2">
            
            <div className="font-bold text-[1.5rem]">Summary</div>
            <p>
              <span className="font-bold py-1">Total Items: <span className="font-normal">{cart.length} </span></span>
            </p>
            <p className="font-bold py-1">Sub Total: <span className="font-normal"> ${alltotalAmount} </span></p>
            <p className="font-bold py-1">Delivery Charges: <span className="font-normal"> ${shippingCharge} </span></p>
            <p className="font-bold py-1">Total Amount: <span className="font-normal"> ${alltotalAmount + shippingCharge} </span></p>
          </div>
  
          <div>
            
            <hr class="h-px my-2 bg-gray-700 border-0 "></hr>
            <div className="w-full grid grid-cols-1 place-items-center ">
            <button onClick={()=>{toast.success("Your Order has successfully Placed 😍")}} className="w-[90%] font-extrabold text-white cursor-pointer my-2 hover:scale-95 duration-300 ease-in bg-green-500 py-2 drop-shadow-lg">
              CHECKOUT
            </button>
            </div>
          </div>
          </section>
        </div>
  
  
      </div>) : 
      (<div className="bg-orange-500 md:max-w-[40%] max-w-[70%]  rounded-xl m-auto h-[20rem] my-[5rem] grid grid-cols-1 place-items-center">
        <h1 className="flex flex-col text-center font-extrabold text-white  text-3xl relative">Bag Is Empty <div className="text-5xl animate-bounce absolute top-20 left-[4rem]"> 😥</div></h1>
        <Link to={"/"}>
          <button className="bg-slate-900 text-white px-3 font-extrabold hover:scale-105 duration-200 ease-in py-2">
            Shop Now
          </button>
        </Link>
      </div>)
    }
      </div>
  )
}

export default Cart