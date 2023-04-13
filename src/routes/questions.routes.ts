import { Router } from "express";
import { create } from "../controllers/question.controller";

export const questionsRoutes = Router()

questionsRoutes.post('/questions', create )