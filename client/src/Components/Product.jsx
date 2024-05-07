import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add,remove } from '../../Redux/Slices/CartSlice';

const Product = ({p}) => {
    const {cart} = useSelector((state)=> state);
    const dispatch = useDispatch();

    console.log(cart)

const addToCart = () => {
    dispatch(add(p));
}

const removeFromCart = () => {
    dispatch(remove(p._id));
}

  return (
    <>
    <div className='w-[14rem] h-[25rem] bg-red-300 border border-blue-900 m-[2px]'>
                <div>
                    <p className='text-xl font-semibold'>{p.title}</p>
                </div>
<hr></hr>
                <div>
                    <p className='text-sm'>{p.description}</p>
                </div>

                <div>
                    <img src={p.image} alt='door' />
                </div>

                <div className='flex justify-between'>

                <div>
                    <p>${p.price}</p>
                </div>
                {
                    cart.some((item)=> item._id === p._id) ? (<button onClick={removeFromCart} className='w-[6rem] bg-yellow-200 border border-black'>Remove</button>)
                    : (<button onClick={addToCart} className='w-[6rem] bg-yellow-200 border border-black'>Add</button>)

                }
                

                </div>

            </div>
    </>
    
  )
}

export default Product