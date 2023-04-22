export interface BodyCreateStudents {
    name: string
    cpf: string
}

export interface Student extends BodyCreateStudents{
    id: string
}

export interface RouteParamsStudent {
    id: string
}