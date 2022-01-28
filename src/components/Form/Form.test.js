/* eslint-disable testing-library/prefer-screen-queries */
// import { render, fireEvent } from '@testing-library/react';
import Form from './Form';

import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { fireEvent, getByTestId, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'


// describe('Form Component', () => {
// 	it('should render onSubmit function', () => {
//     const onSubmit = jest.fn();
//     const { getByTestId } = render(<Form onSubmit={onSubmit}/>);

//     fireEvent.submit(getByTestId("form"));

//     expect(onSubmit).toHaveBeenCalled();
// 	})
// })

describe('login', () => {

  const server = setupServer(
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
  )
  
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())


	it ('should be possible to render Form component', () => {
    render(<Form />)
    
  })

  it ('should be possible to have a name input', () => {
    const {getByPlaceholderText} = render(<Form />)
    
    const name = getByPlaceholderText('Name')

    expect(name).toBeTruthy()
  })

  it ('should be possible to have an password input', () => {
    const {getByPlaceholderText} = render(<Form />)
    
    const password = getByPlaceholderText('Password')

    expect(password).toBeTruthy()
  })

  it('if not login and password should return error message', async () => {
    render(<Form />)
  
    fireEvent.click(screen.getByRole('button'))
  
    await waitFor(() => screen.getByText('Não autorizado'))
  
    expect(screen.getByText('Não autorizado')).toHaveTextContent('Não autorizado')
  })

  it('if had login and password should return  message', async () => {
    render(<Form />)
    
    userEvent.type(
      screen.getByPlaceholderText('Name'),
      'Ellen',
    )
    userEvent.type(
      screen.getByPlaceholderText('Password'),
      '123@123',
    )

    fireEvent.click(screen.getByRole('button'))
  
    await waitFor(() => screen.getByText('Login efetuado'))
  
    expect(screen.getByText('Login efetuado')).toHaveTextContent('Login efetuado')
  })

})


