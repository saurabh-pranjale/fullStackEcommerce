import React, { useContext, useState } from 'react';
import { CgProfile } from "react-icons/cg";
import { FiShoppingCart } from "react-icons/fi";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './Context';

const Navbar = () => {
    const navigate = useNavigate()
    const { cart } = useSelector((state) => state);
    const [log,setLog] = useState(true);

    const {setState,state} = useContext(AuthContext)

    const Logout = () => {
        localStorage.removeItem('jwt')
        setState(false)
        navigate('/')
    }

    return (
        <nav className='bg-red-600 h-[3rem] flex items-center'>
            <div className='container mx-auto px-4'>
                <div className='flex justify-between items-center'>
                    <Link to={'/'}>
                        <h2 className='text-2xl font-mono font-extrabold text-white'>TE</h2>
                    </Link>
                    <div className='flex items-center'>
                        { state ? <button onClick={Logout}>Logout</button> :<CgProfile size={32} color='white' />}
                        
                        {cart.length > 0 && (
                                    <span className='absolute top-0 right-0 bg-white text-red-600 rounded-full w-4 h-4 flex items-center justify-center text-xs'>
                                        {cart.length}
                                    </span>
                                )}
                        <div className='ml-2'>
                            <Link to={'/cart'} className='relative'>
                                <FiShoppingCart size={32} color='white' />
                              
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;