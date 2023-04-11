import express from "express"; //inicializar express
import cors from 'cors'

export const app = express()

app.use(express.json())
app.use(cors())