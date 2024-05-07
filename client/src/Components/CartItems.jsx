import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { useDispatch } from 'react-redux';



const CartItem = ({ item, index }) => {
    const dispatch = useDispatch();
  
    const removeFromCart = () => {
        // dispatch(remove(item.id));
        // Assuming you have toast notifications set up properly
        // toast.error("Item Removed");
    }

    return (
        <div key={index} className="w-[97%] m-auto my-2">
            <hr className="h-px my-2 bg-gray-200 border-0" />
            <div className="flex flex-row relative">
                <div>
                    <img src={item.image} className="h-[7rem] w-[6rem] mr-2" alt={item.name} />
                </div>
                <div className="absolute right-1 cursor-pointer">
                    <FaTimes />
                </div>
                <div className="m-auto flex flex-col ml-2 w-[70%]">
                    <h1 className="font-bold mb-2 max-w-[9rem]">{item.name}</h1>
                    <h1 className="max-w-[16rem] md:max-w-[20rem] mb-2">{item.description.slice(0, 40)}</h1>
                    <div className="flex flex-row my-2">
                        <div className="flex flex-row justify-center items-center">
                            <p className="text-[1rem] font-extrabold cursor-pointer border border-black w-6 flex items-center justify-center hover:bg-slate-200" onClick={() => dispatch(decreaseQuantity({ id: item.id }))}>-</p>
                            <p className="px-4">{5}</p>
                            <p className="text-[1rem] font-extrabold cursor-pointer border border-black w-6 flex items-center justify-center hover:bg-slate-200" onClick={() => dispatch(increaseQuantity({ id: item.id }))}>+</p>
                        </div>
                        <p className="ml-6 sm:ml-[7rem]">${item.price * 5}</p>
                    </div>
                </div>
            </div>
            <hr className="h-px my-2 bg-gray-200 border-0" />
        </div>
    );
};

export default CartItem;
