import fs from 'fs'
import { Student } from '../types/students.types'


export function getStudentsFile() {
    const studentsFile = fs.readFileSync('src/database/students.json').toString()
    const studentsFileJson: Student[] = JSON.parse(studentsFile)
    return studentsFileJson
}