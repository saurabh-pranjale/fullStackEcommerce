import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/signup', { name, username, email, password });
            navigate('/');
            console.log(response.data);
            setName('');
            setUsername('');
            setEmail('');
            setPassword('');
        } catch (error) {
            console.error(error);
            setError('Failed to sign up. Please try again.');
        }
    }

    return (
        <div className='max-w-md mx-auto mt-8 p-6 bg-white shadow-md rounded-lg'>
            <h2 className='text-2xl font-semibold mb-4'>Sign Up</h2>
            {error && <p className='text-red-500 mb-4'>{error}</p>}
            <form onSubmit={handleSubmit}>
                <input className='w-full border-2 border-gray-300 p-2 mb-4 rounded-md' placeholder='Name' type='text' value={name} onChange={(e) => setName(e.target.value)} />
                <input className='w-full border-2 border-gray-300 p-2 mb-4 rounded-md' placeholder='Username' type='text' value={username} onChange={(e) => setUsername(e.target.value)} />
                <input className='w-full border-2 border-gray-300 p-2 mb-4 rounded-md' placeholder='Email' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input className='w-full border-2 border-gray-300 p-2 mb-4 rounded-md' placeholder='Password' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <button className='w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none' type='submit'>Sign Up</button>
            </form>
        </div>
    );
}

export default Signup;
