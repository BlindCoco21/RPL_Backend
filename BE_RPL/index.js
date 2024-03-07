import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js"

const express = require('express')
const app = express()
app.use(cors())
app.use(express.json())
const port = 5000

const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.get('/ProjekRPL', (req, res) => {
  console.log({urlParam :req.query})
  res.send('GACOR KANG BINGUNG GWAH')
})

app.post('/login', (req, res) =>{
  console.log({requestFromOutside : req.body})
  res.send('Login berhasil cuy')
})

app.put('/username', (req,res) =>{
  console.log({updateData : req.body})
  res.send('update berhasil')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})