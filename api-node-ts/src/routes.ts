import { Router, Request, Response } from "express";
import { CreateUsersController } from "./Controllers/CreateUsersController";

const router = Router();
const creatUsersController = new CreateUsersController();

router.get('/', (request: Request, response: Response) => {

    return response.json({mensagem: 'Bem vindo a nossa DIO API'})
})

router.post('/usuarios', creatUsersController.handle)

export { router }