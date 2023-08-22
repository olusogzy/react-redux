import React from 'react'
import '../App.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';



function Login(){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
    
    const login= (e) => {
        e.preventDefault()
        console.log(email, password)
        
        fetch('http://localhost:8000/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin":"*"
            },
            body: JSON.stringify({
                email,
                password
            })
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                if(data.status == "ok"){
                    alert("login sucessful")
                    // navigate('/home')
                    window.localStorage.setItem("token", data.data)
                    navigate('/home')
                }
                
            })
            .catch((error) => {
                console.log("can't fetch")
              
            })
    }

    return(<div className='bg-black text-white h-screen text-center p-10'>
        <div>
            <h1>Login to 0110</h1>
        </div>
        <form className='pt-20' onSubmit={login}>
            <label>Email: </label>
            <input
                name='email' 
                type='email'
                value={ email } 
                onChange={(e) => setEmail(e.target.value)}
                className='text-black'></input>

            <label>Password: </label>
            <input 
                name='password' 
                type='password' 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='text-black'></input>
            <button className='px-2 border border-2 rounded m-2' type='submit' >Login</button>
        </form>
    </div>)
}

export default Login;


