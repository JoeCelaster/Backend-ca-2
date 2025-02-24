const express = require("express")
const app = express() 
const PORT = 5000
const users = []

app.use(express.json())

app.get('/',(req,res)=>{
    res.send("Server is running !")
})

app.post('/users',(req,res)=>{
    const {username,email,password,Dateofbirth} = req.body
    const newName = {username,email,password,Dateofbirth}

    if (!username){
        res.status(400).send("Username cannot be empty")
    }
    if (!email){
        res.status(400).send("Email cannot be empty")
    }
    if (password.length < 8 || password.length >16){
        res.status(400).send("Password length should be greater than 8 or less than or equal to 16")
    }
    users.push(newName)
    res.status(200).send(users)
})

app.listen(PORT,()=>{
    console.log("Server is running at http://localhost:5000")
})