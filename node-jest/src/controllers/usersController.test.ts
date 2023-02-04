import { Request } from "express"
import { makeMockResponse } from "../../mocks/mockResponse";
import { UsersController } from "./usersController"
describe( 'Users Controller', () =>{
    const usersController = new UsersController();

    const MockRequest = {} as Request
    const MockResponse = makeMockResponse()

    it('Deve listar os nossos usuários', () =>{
        usersController.listarUsuario(MockRequest, MockResponse)
        expect(MockResponse.state.status).toBe(200)
        expect(MockResponse.state.json).toHaveLength(3)
    })

    it('Deve criar um novo usuário', ()=> {
        mockRequest.body = {
          name: 'Novo usuário'
        }
    
        usersController.criarUsuario(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(201)
        expect(mockResponse.state.json).toMatchObject({'mensagem': `Usuário Novo usuário criado`})
      })
    
      it('Não deve criar um usuário com o nome em branco', () => {
        mockRequest.body = {
          name: ''
        }
    
        usersController.criarUsuario(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(403)
        expect(mockResponse.state.json).toMatchObject({mensagem: 'Não é possível criar usuários sem um nome'})
      })
})