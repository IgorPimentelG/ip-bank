import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from './index';

const meta = {
	title: 'components/layout/navbar',
	component: Navbar
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
