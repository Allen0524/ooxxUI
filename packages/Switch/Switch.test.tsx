import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import {Switch} from './Switch';

describe('Button', () => {
	it('renders correctly', () => {
		render(<Switch>button test</Switch>);

		expect(screen.getByText('button test')).toBeInTheDocument();
	});

	it('should disabled', () => {
		render(<Switch disabled={true}>button test</Switch>);

		expect(screen.getByRole('button')).toBeDisabled();
	});
});
