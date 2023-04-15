export interface BodyCreateQuestion {
    description: string
    item_correct: string
    item_a: string
    item_b: string
    item_c: string
    item_d: string
    item_e: string
    score: number
}
export interface Question extends BodyCreateQuestion {
    id: string
}

export interface RouteParamsQuestion {
    id: string
}

export interface BodyUpdateQuestion {
    description?: string
    item_correct?: string
    item_a?: string
    item_b?: string
    item_c?: string
    item_d?: string
    item_e?: string
    score?: number

}