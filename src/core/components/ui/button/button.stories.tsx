import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './index';

const meta = {
	title: 'components/ui/button',
	component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		label: 'Login',
		styleType: 'PRIMARY',
		action: () => {}
	}
}

export const Secondary: Story = {
	args: {
		label: 'Home',
		styleType: 'SECONDARY',
		action: () => {}
	}
}

export const Inline: Story = {
	args: {
		label: 'Sign Up',
		styleType: 'INLINE',
		action: () => {}
	}
}
