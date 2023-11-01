import { FC, ReactNode } from 'react';
import { Container } from './styles';

type Props = {
	to: string;
	children: ReactNode;
}

export const SocialButton: FC<Props> = ({ children, to }) => {
	return (
		<Container href={to} target='_blank'>
			{children}
		</Container>
	);
}
