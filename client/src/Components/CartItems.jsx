import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { remove, increaseQuantity, decreaseQuantity } from '../../Redux/Slices/CartSlice';

const CartItem = ({ item, index }) => {
    const dispatch = useDispatch();

    const handleDecrease = () => {
        dispatch(decreaseQuantity({ id: item._id }));
    };

    const handleIncrease = () => {
        dispatch(increaseQuantity({ id: item._id }));
    };

    const handleRemove = () => {
        dispatch(remove(item._id));
    };

    return (
        <div key={index} className="w-[97%] m-auto my-2">
            <hr className="h-px my-2 bg-gray-200 border-0" />
            <div className="flex flex-row relative">
                <div>
                    <img src={item.image} className="h-[7rem] w-[6rem] mr-2" alt={item.name} />
                </div>
                <div onClick={handleRemove} className="absolute right-1 cursor-pointer">
                    <FaTimes />
                </div>
                <div className="m-auto flex flex-col ml-2 w-[70%]">
                    <h1 className="font-bold mb-2 max-w-[9rem]">{item.name}</h1>
                    <h1 className="max-w-[16rem] md:max-w-[20rem] mb-2">{item.description.slice(0, 40)}...</h1>
                    <div className="flex flex-row my-2">
                        <div className="flex flex-row justify-center items-center">
                            <p className="text-[1rem] font-extrabold cursor-pointer border border-black w-6 flex items-center justify-center hover:bg-slate-200" onClick={handleDecrease}>-</p>
                            <p className="px-4">{item.quantity}</p>
                            <p className="text-[1rem] font-extrabold cursor-pointer border border-black w-6 flex items-center justify-center hover:bg-slate-200" onClick={handleIncrease}>+</p>
                        </div>
                        <p className="ml-6 sm:ml-[7rem]">${item.quantity * item.price}</p>
                    </div>
                </div>
            </div>
            <hr className="h-px my-2 bg-gray-200 border-0" />
        </div>
    );
};

export default CartItem;
