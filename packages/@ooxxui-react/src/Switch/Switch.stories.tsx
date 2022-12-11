import {useState} from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Switch} from './Switch';

export default {
	title: 'Switch',
	component: Switch,
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = args => {
	const [checked, setChecked] = useState(false);

	return <Switch {...args} checked={checked} onChange={setChecked} />;
};

export const Default = Template.bind({});

Default.args = {
	children: 'switch',
};
