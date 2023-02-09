import { Request, Response } from "express"
import { v4 as uuid } from "uuid";
import { CreateUsersService } from "../Services/CreateUsersService";

class CreateUsersController{
    async handle(request: Request, response:Response) {

        const createUsersService = new CreateUsersService();

        const nome = request.body.nome;
        const email = request.body.email;
        const id = uuid();

        if(nome.length === 0 || email.length ===0){
            return response.status(400).json({mensagem: 'Preencha todos os campos'})
        }

        const user = await createUsersService.execute({ id, nome, email})

        return response.status(201).json(user)
        }
}

export { CreateUsersController }