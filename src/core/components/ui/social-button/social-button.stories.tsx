import type { Meta, StoryObj } from '@storybook/react';
import { BsFacebook } from 'react-icons/bs';
import { SocialButton } from './index';

const meta = {
	title: 'components/ui/social-button',
	component: SocialButton,
	args: {
		to: '#',
		children: BsFacebook,
	}
} satisfies Meta<typeof SocialButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: (args) => (
		<SocialButton {...args}>
			<BsFacebook />
		</SocialButton>
	)
}

export const Highlighted: Story = {
	render: (args) => (
		<SocialButton {...args} style='HIGHLIGHTED'>
			<BsFacebook />
		</SocialButton>
	)
}
