import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import {Button} from './Button';

describe('Button', () => {
	it('renders correctly', () => {
		render(<Button>button test</Button>);

		expect(screen.getByText('button test')).toBeInTheDocument();
	});

	it('should disabled', () => {
		render(<Button disabled={true}>button test</Button>);

		expect(screen.getByRole('button')).toBeDisabled();
	});
});
