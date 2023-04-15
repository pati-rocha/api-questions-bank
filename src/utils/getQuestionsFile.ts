import fs from 'fs'
import { Question } from "../types/questions.types"


export function getQuestionsFile() {
    const questionsFile = fs.readFileSync('src/database/questions.json').toString()
    const questionsFileJson: Question[] = JSON.parse(questionsFile)
    return questionsFileJson
}