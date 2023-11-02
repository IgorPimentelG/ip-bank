"use client";

import { CardMarketing } from '@/core/components/layout';
import { Container } from './styles';

export const HomeTemplate = () => {
	return (
		<Container>
			<CardMarketing
				title='Start your financial journey with '
				highlightedTitle='IPBank today!'
				description={`Ready to take control of your finances? Join IPBank now, and let us help you achieve your financial goals with our tailored
					solutions and exceptional customer service`}
				btnLabel='Open Account'
				action={() => {}}
			/>
		</Container>
	);
}
