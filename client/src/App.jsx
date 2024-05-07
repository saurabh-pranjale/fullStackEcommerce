// import jwt from 'jsonwebtoken';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Footer from "./Components/Footer"
import Home from "./Components/Home"
import Navbar from "./Components/Navbar"
import Product from "./Components/Product"

import Cart from "./Components/Cart"
import PageNoteFound from "./Components/PageNoteFound"
import Landing from "./Components/Landing";
import Signin from "./Components/Signin";
import Signup from "./Components/Signup";
import { useState } from "react";
import Admin from "./Components/Admin";
import AddProduct from "./Components/AddProduct";
import Edit from "./Components/Edit";


function App() {
  const [authorised, setAuthorised] = useState(false);

  

  return (

    
    <BrowserRouter>
    <>
<Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/admin" element={<Admin/>} />
      <Route path="/admin/edit/:_id" element={<Edit />} />
      <Route path="/admin/addproduct" element={<AddProduct />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/home" element={<Home />} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="*" element={<PageNoteFound />} />
    </Routes>
    
     {/* <Navbar /> <Home /> <Footer /> */}
    </>
    // </BrowserRouter>
  )
}

export default App
