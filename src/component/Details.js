import React from 'react'
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"
import "../App.css"

function Details(){
    const[ title, setTitle ] = useState('')
    const[ textArea, setTextArea ] = useState('')
    const [details, setDetails] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    
    

    useEffect(() => {
        setLoading(true)
        setError(false)
        axios.get("http://localhost:8001/details")
                .then(res => {console.log(res.data); setDetails(res.data)})
                .catch(err => {setError(true); console.log(err)})
                setLoading(false);
    },[setDetails])

    function handleSubmit(e){
        // e.preventDefault()
        console.log(title, textArea)
        axios.post("http://localhost:8001/details",{
            title: title,
            textarea: textArea
        })
                .then(res => { console.log(res.data); })
                .catch(err => console.log(err))
      }  
      

      function handleDelete(id){
        alert("deleted")
        axios.delete(`http://localhost:8001/details/${id}`);
                setDetails(
                    details.filter((detail)=> {
                        return( detail.id !==id)
                    })
                )

                
      }


    return(
        <div className='form-color'>
            
            <div>
                <h1 className='text-6xl font-bold underline'>Hello World</h1>
                {error && <p>Something went wrong</p>}
                    {loading ?  details : details.map((detail) =>{
                                return(
                                    <div key={detail.id}>
                                        
                                        <h1>Title:{detail.title}</h1>
                                        <p>Message: {detail.textarea}</p>
                                        <button className="bg-black text-white"
                                            onClick={()=>handleDelete(detail.id)}
                                        >delete</button>

                                    </div>
                                )
                            })}
            </div>

            <div className="bg-black text-white h-screen"> 
                <form className="text-black details-form" onSubmit={handleSubmit}>
                    <label className="text-white">title</label>
                    <input 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    ></input>
                    <label className="text-white">Message</label>
                    <textarea 
                    value={textArea}
                    onChange={(e) => setTextArea(e.target.value)}
                    required
                    ></textarea>
                    <button className="bg-white">Submit</button>
                </form>
            </div>

        </div>
    )
}

export default Details;