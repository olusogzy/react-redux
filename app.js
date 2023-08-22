// const express = require('express');
// const mongoose = require('mongoose')
const db = require("./db");
const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken")

const { default: mongoose } = require("mongoose");
 

const app = express();
app.use(express.json());
app.use(cors());

const mongoUrl = 'mongodb+srv://olusoga:adebayo001@cluster0.c1knmna.mongodb.net/?retryWrites=true&w=majority'
const JWT_SECRET = "jkdbgjhksdfknsfoghrhgkn()jksbjvknas@#!5278723"

mongoose
    .connect(mongoUrl, {
        useNewUrlParser: true,
    })
    .then(() => (
        console.log("connected to database")
    ))
    .catch((e) => {
        console.log(e)
    });

require("./userDetails.js")

const User = mongoose.model("UserInfo")

app.post("/register", async (req, res) => {
    const { username, email, password } = req.body
    const encryptedPassword = await bcrypt.hash(password, 10)
    try {
        const oldUser = await User.findOne({email})
    
        if(oldUser){
           return res.send({error: "User Exist"})
        }
        await User.create(
            {
                username,
                email,
                password: encryptedPassword, 
            }
        ), res.send({status: "ok"})
    } catch(error){ 
        res.send({status: "error"})
    }
})

app.post("/login", async(req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    if(!user){
        return res.json({error: "user not found"})
    }
    if(await bcrypt.compare(password, user.password)){
        const token = jwt.sign({email: user.email}, JWT_SECRET);
        if(res.status(201)){
            return res.json({ status: "ok", data: token})
        } else {
            return res.json({ error: "error"})
        }
    } res.json({error: "Invalid password"}) 
})

app.post("/user-profile", async(req, res) =>{
    const { token } = req.body
    try {
        const user = jwt.verify(token. JWT_SECRET)
        const useremail = user.email
        User.findOne({email: useremail})
            .then((data) => {
                res.send({status:"ok", data: data})
            }).catch((error) => {
                res.send({status:"error", data: error})
            })
    } catch (error) {
        res.send({error: "error"})     
    }
})

app.listen(8000, () => {
    console.log("app listening on port 8000")
})
