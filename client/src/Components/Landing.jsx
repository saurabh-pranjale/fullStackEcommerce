import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <>
     <div className="bg-gray-100">
            <header className="text-center py-8">
                <h1 className="text-3xl font-semibold">Welcome to Our E-Commerce Store</h1>
                <p className="mt-2">Discover the latest trends and shop your favorite brands.</p>
            </header>
            <section className="flex flex-col items-center justify-center py-12">
                <div className="w-full max-w-screen-lg mx-auto rounded-lg overflow-hidden shadow-lg">
                    <img className="w-full" src="https://img.freepik.com/free-vector/electronics-store-template-design_23-2151143839.jpg" alt="Banner" />
                </div>
                <div className="mt-8 text-center">
                    <h2 className="text-2xl font-semibold">Ready to Start Shopping?</h2>
                    <p className="mt-2">Sign in or create an account to get started!</p>
                
                    <div className="mt-4 flex justify-center">
                        <Link to="/signin" className="mx-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Sign In</Link>
                        <Link to="/signup" className="mx-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">Sign Up</Link>
                    </div>
                </div>
            </section>
        </div>
    </>
  )
}

export default Landing