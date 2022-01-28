/* eslint-disable testing-library/prefer-screen-queries */
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';
import Form from '../Form/Form';

// describe('Button Component', () => {
// 	it('should have a button in screen', () => {
// 		render(<Button />);

// 		const button = screen.getByRole("button")

// 		expect(button).toBeInTheDocument()
// 	})

// 	it('should have a button with the text "SOU UM BOTÃO!"', () => {
// 		render(<Button />);

// 		const buttonTitle = screen.getByText("SOU UM BOTÃO!")

// 		expect(buttonTitle).toBeInTheDocument()
// 	})

// 	it('When clicking on the button, should render an alert "FUI CLICADO!"', () => {
// 		const alertMock = jest.spyOn(window,'alert').mockImplementation(); 

// 		render(<Button />);

// 		const button = screen.getByText('SOU UM BOTÃO!');

// 		fireEvent.click(button);

// 		expect(alertMock).toHaveBeenCalledTimes(1)
// 	})	
// })

describe('Button Component', () => {
	it('should have a button in screen', () => {
		render(<Button />);

		const button = screen.getByRole("button")

		expect(button).toBeInTheDocument()
	})

	it('should have a button with the text "Login"', () => {
		render(<Button />);

		const buttonTitle = screen.getByText("Login")

		expect(buttonTitle).toBeInTheDocument()
	})

	// it('When clicking on the button, should print in console inputs name and password', () => {
	// 	const onSubmit = jest.fn();
  //   const { getByText } = render(<Form onSubmit={onSubmit}/>);

  //   fireEvent.click(getByText("Login"));
    
  //   expect(onSubmit).toHaveBeenCalled();
	// })	
})