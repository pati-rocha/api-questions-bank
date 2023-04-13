import { Request, Response } from "express";
import {v4 as uuidv4} from 'uuid'

interface BodyCreateQuestion {
  description: string;
  item_correct: string;
  item_a: string;
  item_b: string;
  item_c: string;
  item_d: string;
  item_e: string;
  score: number;
}

export function create(
  req: Request<{}, {}, BodyCreateQuestion>,
  res: Response
) {
    
    const question = {
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
}
