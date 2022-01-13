import { render, screen, fireEvent } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import Button from './Button';


describe('Button Component', () => {
	it('should have a button in screen', () => {
		render(<Button />);

		const button = screen.getByRole("button")

		expect(button).toBeInTheDocument()
	})

	it('should have a button with the text "SOU UM BOTÃO!"', () => {
		render(<Button />);

		const buttonTitle = screen.getByText("SOU UM BOTÃO!")

		expect(buttonTitle).toBeInTheDocument()
	})

	it('When clicking on the button, should render an alert "FUI CLICADO!"', () => {
		const alertMock = jest.spyOn(window,'alert').mockImplementation(); 

		render(<Button />);

		const button = screen.getByText('SOU UM BOTÃO!');

		fireEvent.click(button);

		expect(alertMock).toHaveBeenCalledTimes(1)
	})	
})
