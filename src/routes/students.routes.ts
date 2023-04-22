import { Router } from "express";
import { create, findMany, findOne } from "../controllers/students.controller";

export const studentsRoutes = Router()

studentsRoutes.post('/students', create)

studentsRoutes.get('/students', findMany)

studentsRoutes.get('/students/:id', findOne)



