import { rest } from 'msw'

export const handlers = [
  // Handles a POST /login request
  rest.post('https://my-json-server.typicode.com/typicode/demo/posts', (req, res, ctx) => {
    const mock = { 
      name: 'Ellen', 
      password: '123@123'
    }
    const { name, password } = req.body

    if (name === mock.name && password === mock.password){
      return res(
        // Respond with a 200 status code
        ctx.status(200),
        ctx.json({
          msg: "Login efetuado"
        })
      )
    } else {
      return res(
        // Respond with a 401 status code
        ctx.status(401),
        ctx.json({
          msg: "Não autorizado"
        })
      )
    }
  }),
]