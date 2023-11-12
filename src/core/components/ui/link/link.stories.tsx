import type { Meta, StoryObj } from '@storybook/react';
import { Link } from './index';

const meta = {
	title: 'components/ui/link',
	component: Link,
	args: {
		to: '#',
		label: 'Forgot Password?'
	}
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: StoryObj = {}
