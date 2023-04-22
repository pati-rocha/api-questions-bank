import { Request, Response } from "express";
import fs from 'fs'
import { v4 as uuidv4 } from "uuid";
import { BodyCreateStudents, RouteParamsStudent, Student} from "../types/students.types";
import { getStudentsFile } from "../utils/getStudentsFile";

export function create( req: Request< {}, {}, BodyCreateStudents>, res: Response) {

    const student: Student = {
        id: uuidv4(),
        name : req.body.name,
        cpf : req.body.cpf
    } 

    const studentsFileJson = getStudentsFile()

    const data = [... studentsFileJson, student]

    fs.writeFileSync('src/database/students.json', JSON.stringify(data)) 

    res.status(201).json(student)
}

export function findMany(req: Request, res: Response) {
   
    const studentsFileJson = getStudentsFile()
    res.json(studentsFileJson)
}

export function findOne( req: Request< RouteParamsStudent >, res: Response) {

    const studentsFileJson = getStudentsFile()
    const student = studentsFileJson.find( student => student.id == req.params.id) 
    
    if(!student){
        return res.status(404).json({error: "Estudante não encontrado!"})
    }
    res.json(student)
}
