import { FC } from 'react';
import { Container } from './styles';

type Props = {
	label: string;
	styleType?: 'PRIMARY' | 'SECONDARY' | 'INLINE';
	action: () => void;
}

export const Button: FC<Props> = ({ label, action, styleType = 'PRIMARY' }) => {
	return (
		<Container onClick={action} data-style={styleType}>
			<span>{label}</span>
		</Container>
	);
}
