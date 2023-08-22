import React from 'react'
import "../App.css"
import { useState, useEffect } from "react"
import  Sneakers  from "../images/whitesneakers.jpg"
import axios from "axios"
import Navbar from "../component/Navbar"
import { setDriver } from "mongoose"
function Home() {
    const [ username, setUsername ] = useState()
    const [ email, setEmail ] = useState()
    const [plus, setPlus] = useState(0)
    const [ movieDatas, setMovieDatas ] = useState([])

    

    useEffect(() => {
         axios.get("https://restcountries.com/v3.1/independent?status=true&fields=languages,capital")
                 .then(res => {console.log(res.data); setMovieDatas(res.data)})
                 .catch(err => console.log(err))
    }, [])

        const countPlus = () =>{
            setPlus(Number(plus)+1)
            
        }

        const countMinus = () =>{
            setPlus(Number(plus)-1)
        }


    // useEffect(()=> {
    //     axios.get("http://localhost:8000/details")
    //             .then(res => {console.log(res.data); setDetails(res.data)})
    //             .catch(err => console.log(err) )
    // }, [])
       
    
        
    return (
    <div>
        <Navbar />
        
        <div className="bg-black text-white h-screen"> 

            <div>
                <h1> Welcome {username}, your mail is {email}</h1>
            </div>

            <div className="w-40">
                <div>
                <img src={ Sneakers } alt="white-sneakers"></img>
                </div>
                <div>
                    <button className="border-2 border-white w-8"
                    onClick={countMinus}
                    > - </button>
                    <span className="p-4">{plus}</span>
                    <button className="border-2 border-white w-8"
                    onClick={countPlus}
                    > + </button>
                </div>
                <div className="border-2 border-white w-40 text-center my-4">
                    <button>Add To Cart</button>
                </div>


            </div>

        </div>                         
        
        <div> 
            {movieDatas.map((movieData) =>{
            return(
                <div key={movieData.id}>
                  <h1>COuntry: {movieData.country}</h1>
                  <h1 className=""> Capital: {movieData.capital}</h1>
                  <p>Languages: {movieData.languages.eng}</p>
                </div>
                )}
            )}
        </div>
    </div>
    )
}

export default Home;




        {/* {movieDatas.map((movieData, index) => {
            return(
            <div key={movieData.weather.id} className="">
                 <h1 className=" border-4 p-4 rounded">{movieData.weather.main}</h1>
            </div>)
        }) } */}
// 9fe8b43d782660b15864e7148e7c24f6

// https://api.themoviedb.org/3/movie/550?api_key=9ea3e26c3fe15640782a8ab5434a1bfe 

// {/* <div className="bg-black text-white h-screen">
// {/* <Navbar /> */}
{/* <div>
    <h1> Welcome {username}, your mail is {email}</h1>
</div>

<div className="w-40">
    <div>
    <img src={ Sneakers } alt="white-sneakers"></img>
    </div>
    <div>
        <button className="border-2 border-white w-8"
        onClick={countMinus}
        > - </button>
        <span className="p-4">{plus}</span>
        <button className="border-2 border-white w-8"
        onClick={countPlus}
        > + </button>
    </div>
    <div className="border-2 border-white w-40 text-center my-4">
        <button>Add To Cart</button>
    </div>
</div>
</div> */} 



    // fetch('http://localhost/8000/user-profile',{
    //     method: 'POST',
    //     crossDomain: true,
    //     headers: {
    //         "Content-Type": "application/json",
    //         Accept: "application/json",
    //         "Access-Control-Allow-Origin":"*"
    //     },
    //     body: JSON.stringify({
    //         token:window.localStorage.getItem("token")
    //         })
    // }) .then((res) => res.json())
    //     .then((data) => {
    //         console.log(data)
    //         setUsername(data.data)
    //         setEmail(data.data)
            
    //     })
    //     .catch((error) => {
    //         console.log({error:"could not fetch"})
    //     })
