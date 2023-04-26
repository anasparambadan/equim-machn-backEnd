import express from 'express'
import cors from 'cors'
import { Addition } from './Addition.js'


const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.listen(5000,()=>console.log("server running"))



app.post('/add',Addition)
