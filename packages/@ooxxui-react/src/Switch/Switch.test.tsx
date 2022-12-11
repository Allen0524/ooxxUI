import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import {Switch} from './Switch';

describe('Button', () => {
	it('renders correctly', () => {
		render(<Switch />);

		expect(screen.getByRole('button')).toBeInTheDocument();
	});

	it('should call the onChange listener when choosing new value', async () => {
		const handleChange = jest.fn();
		render(<Switch checked={false} onChange={handleChange} />);
		const switchElm = screen.getByRole('button');
		await userEvent.click(switchElm);
		expect(handleChange).toBeCalledWith(true);
	});
});
