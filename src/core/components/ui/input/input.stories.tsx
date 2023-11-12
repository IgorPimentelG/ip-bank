import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './index';

const meta = {
	title: 'components/ui/input',
	component: Input,
	args: {
		placeholder: 'Enter your Email'
	}
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Password: Story = {
	args: {
		type: 'password',
		placeholder: 'Enter your password'
	}
}
