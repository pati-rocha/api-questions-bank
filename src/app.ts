import express from "express"; //inicializar express
import cors from 'cors'
import { questionsRoutes } from "./routes/questions.routes";
import { studentsRoutes } from "./routes/students.routes";

export const app = express()

app.use(express.json())
app.use(cors())
app.use(questionsRoutes)
app.use(studentsRoutes)