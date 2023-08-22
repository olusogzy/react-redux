import React from 'react'
import "./App.css"
import { Link } from 'react-router-dom'
import Navbar from "./component/Navbar";



function Landing(){
    return(<div>
        
        <div>
                <nav className="navbar text-white bg-black text-center h-10 text-2xl pt-10">
                    <h1>Welcome to 0110</h1>
                </nav>
                <div className="landing bg-black h-screen text-white flex items-center justify-evenly text-xl ">

                    <Link to='/login'>
                            <button className="border border-2 rounded px-6">Login</button>
                    </Link>


                    <Link to='/signup'>
                        <button className="border border-2 rounded px-6">SignIn</button>
                    </Link>
                    </div>
        </div>    
    </div>)
}

export default Landing;