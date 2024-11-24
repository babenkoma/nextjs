import { ReactElement } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from '@/library/shadcn';

function Component(props: ButtonProps): ReactElement {
	return <Button {...props}>Button</Button>;
}

const defaultProps: ButtonProps = {
	variant: 'primary',
	size: 'md',
	disabled: false,
};

const meta: Meta<ButtonProps> = {
	title: 'Buttons',
	component: Component,
	argTypes: {
		variant: {
			control: 'select',
			options: ['primary', 'secondary', 'link'],
		},
		size: {
			control: 'select',
			options: ['sm', 'md', 'lg'],
		},
		disabled: {
			control: 'boolean',
		},
	},
};
export default meta;

export const ButtonStory: StoryObj<ButtonProps> = {
	name: 'Text button',
	args: defaultProps,
};
