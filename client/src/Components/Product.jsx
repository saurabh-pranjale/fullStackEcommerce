import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add,remove } from '../../Redux/Slices/CartSlice';

const Product = ({p}) => {
    const {cart} = useSelector((state)=> state);
    const dispatch = useDispatch();

    console.log(cart)

const addToCart = () => {
    console.log("product_add",p)
    dispatch(add({...p, quantity:1}));
}

const removeFromCart = () => {
    dispatch(remove(p._id));
}

  return (
    <>
   <div className="w-full sm:w-[14rem] h-[25rem] bg-red-300 border border-blue-900 mx-auto sm:m-[2px] my-4 sm:my-0 p-4 rounded-lg shadow-md">
    <div className="mb-4">
        <p className="text-xl font-semibold">{p.title}</p>
    </div>
    <hr className="my-2 border-t border-gray-400" />
    <div className="mb-4">
        <p className="text-sm">{p.description}</p>
    </div>
    <div className="mb-4">
        <img className="w-full max-h-[12rem]" src={p.image} alt="door" />
    </div>
    <div className="flex justify-between items-center">
        <div>
            <p className="text-lg font-semibold">${p.price}</p>
        </div>
        <div>
            {cart.some((item) => item._id === p._id) ? (
                <button onClick={removeFromCart} className="w-[6rem] bg-yellow-200 border border-black px-2 py-1 rounded-md">Remove</button>
            ) : (
                <button onClick={addToCart} className="w-[6rem] bg-yellow-200 border border-black px-2 py-1 rounded-md">Add</button>
            )}
        </div>
    </div>
</div>

    </>
    
  )
}

export default Product