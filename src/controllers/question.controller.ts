import { Request, Response } from "express";
import { v4 as uuidv4 } from 'uuid'
import fs from 'fs'
import { 
  BodyCreateQuestion, 
  BodyUpdateQuestion, 
  Question, 
  RouteParamsQuestion } from "../types/questions.types";
import { getQuestionsFile } from "../utils/getQuestionsFile";

//let questions: Question[] = []

export function create(
  req: Request<{}, {}, BodyCreateQuestion>,
  res: Response
) {
  const question: Question = {
    id: uuidv4(),
    description: req.body.description,
    item_correct: req.body.item_correct,
    item_a: req.body.item_a,
    item_b: req.body.item_b,
    item_c: req.body.item_c,
    item_d: req.body.item_d,
    item_e: req.body.item_e,
    score: req.body.score
  }  
  /*file system - é um módulo embutido no Node.js que fornece APIs para interagir com o sistema de arquivos do sistema operacional. Ele permite que você realize operações de leitura, escrita, atualização, exclusão e manipulação de arquivos e diretórios no sistema de arquivos local. 
  O arquivo é um objeto buffer, então quando vamos manipulá-lo:
  1- converter o Buffer em uma string,
  2- converter a string em um objeto JSON,
  3- manipulamos inserindo algo,
  4- converte em string novamente,
  5- depois devolve
*/
  //LEMBRAR DE COLOCAR O ARRAY VAZIO QUESTION.JSON
  //1- originalmente ele é um objeto buffer, então precisa converter em string
  const questionsFile = fs.readFileSync('src/database/questions.json').toString()  
  //2- converter a string em um objeto JSON
  const questionsFileJson = JSON.parse(questionsFile)

  //3- manipular o json
  const data = [ ... questionsFileJson, question]

  //4- converter o objeto json em string
  fs.writeFileSync('src/database/questions.json', JSON.stringify(data))  

  res.status(201).json(question)
}

export function findMany( req: Request, res: Response){
  
  const questionsFileJson = getQuestionsFile()

  res.json(questionsFileJson)
}

export function findOne( req: Request<RouteParamsQuestion >, res: Response){

  const questionsFileJson = getQuestionsFile()

  const question = questionsFileJson.find( question => question.id == req.params.id)

  if(!question) {
    return res.status(404).json({error:"Questão não encontrada!"})
  }
  res.json(question) 
}

export function destroy( req: Request<RouteParamsQuestion>, res: Response) {

  const questionsFileJson = getQuestionsFile()

  const questions = questionsFileJson.filter(question => question.id != req.params.id)

  fs.writeFileSync('src/database/questions.json', JSON.stringify(questions))

  res.json()
}

export function update( req: Request<RouteParamsQuestion, {}, BodyUpdateQuestion>, res: Response) {

  const questionsFileJson = getQuestionsFile()
  const updateQuestions = questionsFileJson.map( question => {

    if( question.id == req.params.id) {
      question.description = req.body.description || question.description
      question.item_correct = req.body.item_correct || question.item_correct
      question.item_a = req.body.item_a || question.item_a
      question.item_b = req.body.item_b || question.item_b
      question.item_c = req.body.item_c || question.item_c
      question.item_d = req.body.item_d || question.item_d
      question.item_e = req.body.item_e || question.item_e
      question.score = req.body.score || question.score
    }
    return question
  })

  fs.writeFileSync('src/database/questions.json', JSON.stringify(updateQuestions))

  res.json()
}




