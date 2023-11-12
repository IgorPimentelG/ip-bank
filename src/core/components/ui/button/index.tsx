import { FC } from 'react';
import { Container } from './styles';

type Props = {
	label: string;
	type?: 'PRIMARY' | 'SECONDARY' | 'INLINE';
	action: () => void;
}

export const Button: FC<Props> = ({ label, action, type = 'PRIMARY' }) => {
	return (
		<Container onClick={action} data-style={type}>
			<span>{label}</span>
		</Container>
	);
}
