import { render, screen } from '@testing-library/react';
import Input from './Input';


// describe('Input Component', () => {
// 	it('should render input name component', () => {
// 		render(<Input />);

// 		const name = screen.getByTestId('input-name')

// 		expect(name).toBeInTheDocument()
// 	})
// })

describe('Input Component', () => {
	it('should render input component', () => {
		render(<Input/>);

	})

	it('should render input name component', () => {
		render(<Input data-testid="input-name"/>);

		const name = screen.getByTestId('input-name')

		expect(name).toBeInTheDocument()
	})

	it('should render input password component', () => {
		render(<Input data-testid="input-password"/>);

		const password = screen.getByTestId('input-password')

		expect(password).toBeInTheDocument()
	})
})

