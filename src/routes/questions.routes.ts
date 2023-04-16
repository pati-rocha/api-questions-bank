import { Router } from "express";
import { 
    create, 
    destroy, 
    findMany, 
    findOne,
    update, } from "../controllers/question.controller";

export const questionsRoutes = Router()

questionsRoutes.post('/questions', create)

questionsRoutes.get('/questions', findMany)

questionsRoutes.get('/questions/:id', findOne)

questionsRoutes.delete('/questions/:id', destroy)

questionsRoutes.put('/questions/:id', update)
