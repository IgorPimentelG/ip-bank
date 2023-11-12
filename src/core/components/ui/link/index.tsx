import { FC } from 'react';
import { Container } from './styles';
import { default as NextLink } from 'next/link';

type Props = {
	label: string;
	to: string;
}

export const Link: FC<Props> = ({ label, to }) => {
	return (
		<Container>
			<NextLink href={to}>
				<span>{label}</span>
			</NextLink>
		</Container>
	);
}
