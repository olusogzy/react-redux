import React from 'react'
import '../App.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import { application, json } from 'express'

function Signup(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [error, setError] = useState()
    const [load, setLoad] = useState(false)
    const navigate = useNavigate()

    const signUp = (e) => {
        e.preventDefault()
        console.log(email, username, password)
        fetch('http://localhost:8000/register', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin":"*"
            },
            body: JSON.stringify({
                username,
                password,
                email
            })
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                // setLoad(true)
                navigate("/login")
            })
            .catch((error) => {
                console.log("can't fetch")
                navigate("/sigup")
            })
    }

    return(<div className='form-dev form-color bg-black text-white h-screen text-center p-10'>
        <div>
            <h1>Sign up to 0110</h1>
        </div>
        <form className='pt-20 ' onSubmit={signUp}>
            <label className='p-2' >Username: </label>
            <input type='text' value={username} 
            onChange={(e) => {setUsername(e.target.value)}}
            className='text-black'
            ></input>

            <label className='p-2' >Email</label>
            <input
             name='email' 
             type='email' 
             value={email}
             onChange={(e) => setEmail(e.target.value)}
             className='text-black'></input>

            <label className='p-2' >Password: </label>
            <input 
            name='password' 
            type='password' 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='text-black'></input>
            <button className='px-2 border border-2 rounded m-2' type='submit' >Sign up</button>
        </form>
    </div>)
}


export default Signup