import { getConnection } from "typeorm";
import  createConnection  from "../database";
import { v4 as uuid } from "uuid";
import { CreateUsersService } from "./CreateUsersService";

describe('CreateUserService', () =>{
    beforeAll(async () => {
        const connection = await createConnection()
        connection.runMigrations()
    })

    afterAll(async () =>{
        const connection = getConnection()
        await connection.query('DELETE FROM usuarios')
        await connection.close()
    })

    it('Deve retornar o id do usuário criado', async() =>{
        const createUserService = new CreateUsersService();

        const result = await createUserService.execute({
            id: uuid,
            nome: 'Algum usuario',
            email: 'email@email.com'
        }) 

        console.log(result)

        expect(result).toHaveProperty('id')
    })
})