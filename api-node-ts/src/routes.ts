import { Router, Request, Response } from "express";

const router = Router();

router.get('/', (request: Request, response: Response) => {

    return response.json({mensagem: 'Bem vindo a nossa DIO API'})
})

router.get('/usuarios', (request: Request, response:Response) => {

return response.json([
        {
            nome: 'Jessica'
        },
        {
            nome: 'Leonardo'
        },
        {
            nome: 'Theo'
        }
    ])
})

export { router }