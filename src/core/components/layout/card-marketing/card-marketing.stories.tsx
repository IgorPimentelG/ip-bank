import type { Meta, StoryObj } from '@storybook/react';
import { CardMarketing } from './index';

const meta = {
	title: 'components/layout/card-marketing',
	component: CardMarketing,
	args: {
		action: () => {},
		title: 'Start your financial journey with',
		highlightedTitle: 'IPBank today!',
		description: 'Ready to take control of your finances? Join IPBank now, and let us help you achieve your financial goals with our tailored solutions and exceptional customer service',
		btnLabel: 'Open Account'
	}
} satisfies Meta<typeof CardMarketing>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
