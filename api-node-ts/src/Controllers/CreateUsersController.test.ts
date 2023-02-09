import  createConnection  from "../database";
import { CreateUsersController } from "./CreateUsersController";
import { request, Request, response } from "express";
import { MockResponse } from "../utils/mocks/mockResponse";

describe('CreateUserController', () => {
    it('Deve retornar o id do usuário criado', async() =>{
        await createConnection()
        const createUserController = new CreateUsersController();

        const request = {
            body: {
                nome: 'Algum usuário',
                email: 'email@email.com'
            }
        }as Request

        const response = mockResponse()

        const result = await createUserController.handle(request, response)

        console.log(result)
    })
})