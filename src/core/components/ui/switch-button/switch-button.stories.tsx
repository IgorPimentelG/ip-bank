import type { Meta, StoryObj } from '@storybook/react';
import { SwitchButton } from './index';

const meta = {
	title: 'components/ui/switch-button',
	component: SwitchButton,
} satisfies Meta<typeof SwitchButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		labelLeft: 'For Individuals',
		labelRight: 'For Businesses',
		action: () => {}
	}
}

