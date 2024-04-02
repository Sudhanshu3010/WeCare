//step1:create server
// const express = require("express");
import express from "express";
import dotenv from "dotenv";

dotenv.config({
   path:".env" 
})

 


//call the express
const app = express();
// const PORT=8080;



const callBackFunction = ()=>{
   console.log(`Server listen ar port ${process.env.PORT}`);
}


app.listen(process.env.PORT,callBackFunction);
