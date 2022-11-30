import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';

import {Button} from './Button';

describe('Button', () => {
	it('render correctly', () => {
		render(<Button />);

		expect(screen.getByText('123')).toBeInTheDocument();
	});
});
