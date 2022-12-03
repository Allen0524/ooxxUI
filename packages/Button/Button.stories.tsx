import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Button} from './Button';

export default {
	title: 'Button',
	component: Button,
} as ComponentMeta<typeof Button>;

export const Primary: ComponentStory<typeof Button> = () => (
	<Button
		// disabled
		onClick={e => {
			console.log(e);
		}}
	>
		123
	</Button>
);
