/* eslint-disable testing-library/prefer-screen-queries */
import { render, fireEvent } from '@testing-library/react';
import Form from './Form';


describe('Form Component', () => {
	it('should render onSubmit function', () => {
    const onSubmit = jest.fn();
    const { getByTestId } = render(<Form onSubmit={onSubmit}/>);

    fireEvent.submit(getByTestId("form"));

    expect(onSubmit).toHaveBeenCalled();
	})
})
