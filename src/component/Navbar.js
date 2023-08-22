import React from 'react'
import "../App.css"
import { Link } from "react-router-dom"
import Cart from "../images/cart.png"


const Navbar = () =>{
    return(
    <navbar>
        <h1>1001</h1>
        <Link><img src={Cart}></img></Link>
    </navbar>)
}


export default Navbar;