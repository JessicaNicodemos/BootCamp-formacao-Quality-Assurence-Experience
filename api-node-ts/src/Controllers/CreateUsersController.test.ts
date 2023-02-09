import { getConnection } from 'typeorm';
import  createConnection  from "../database";
import { CreateUsersController } from "./CreateUsersController";
import { request, Request, response } from "express";
import { MockResponse } from "../utils/mocks/mockResponse";
import { getConnection } from "typeorm";

describe('CreateUserController', () => {
    beforeAll(async () => {
        const connection = await createConnection()
        connection.runMigrations()
    })

    afterAll(async () =>{
        const connection = getConnection()
        await connection.query('DELETE FROM usuarios')
        await connection.close()
    })

    const createUserController = new CreateUsersController();
    const response = mockResponse()

    it('Deve retornar status 201 quando usuario for criado', async() =>{

        const request = {
            body: {
                nome: 'Algum usuário',
                email: 'email@email.com'
            }
        }as Request


        await createUserController.handle(request, response)


        expect(response.state.status).toBe(201)
    })

    it('Deve retornar status 400 quando o nome não for informado', async() =>{
        const request = {
            body: {
                nome: '',
                email: 'email@email.com'
            }
        }as Request


        await createUserController.handle(request, response)


        expect(response.state.status).toBe(400)
    })

    it('Deve retornar status 201 quando email não for informado', async() =>{

        const request = {
            body: {
                nome: 'Algum usuário',
                email: ''
            }
        }as Request


        await createUserController.handle(request, response)


        expect(response.state.status).toBe(201)
    })
})