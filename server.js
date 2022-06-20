const express  = require('express');
const fs = require('fs');
const https=require('https');
const PORT = 3000;
const server = express();
const path  = require('path');
const passport = require('passport');
const helmet  = require('helmet');

const config ={
    "client_secret":process.env.CLIENT_SECRECT,
    "client_id": process.env.CLIENT_ID

};





server.use(helmet());
server.passpo
function checkLoggedIn(req,res,next){
    const isLoggedIn=true;
    if(!isLoggedIn)
    {
        return res.status(401).json({
            error:'You must log in!'
        });
    }
    next();
}

server.get('/auth/google',(req,res)=>{});
server.get('/auth/google/callback',(req,res)=>{});
server.get('/auth/logout',(req,res)=>{});
server.get('/',(req,res)=>{
    return res.status(200).sendFile(path.join(__dirname,'public','index.html'));
})

server.get('/secret',checkLoggedIn,(req,res)=>{
    return res.status(200).send("Your secret key is 42!");
})

https.createServer(
    {
        key:fs.readFileSync ('key.pm'),
        cert:fs.readFileSync ('cert.pm')
    },
    server
).listen(PORT,()=>{
    console.log("Server is listening ");
})