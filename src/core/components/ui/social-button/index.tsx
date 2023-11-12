import { FC, ReactNode } from 'react';
import { Container } from './styles';

type Props = {
	to: string;
	children: ReactNode;
	style?: 'PRIMARY' | 'HIGHLIGHTED';
}

export const SocialButton: FC<Props> = ({ children, to, style = 'PRIMARY' }) => {
	return (
		<Container href={to} target='_blank' data-style={style}>
			{children}
			{style === 'HIGHLIGHTED' && <div />}
		</Container>
	);
}
