"use client";

import { Arrows } from '@/core/assets';
import { CardMarketing } from '@/core/components/layout';
import { Button } from '@/core/components/ui';
import Image from 'next/image';
import { HiMiniCheckBadge } from 'react-icons/hi2';
import { Badge, Container } from './styles';
import { CardTransaction } from './components/card-transaction';

export const HomeTemplate = () => {
	return (
		<Container>
			<section>
				<div>
					<Badge>
						<HiMiniCheckBadge />
						<span>No LLC Required, No Credit Check.</span>
					</Badge>

					<h3>
						Welcome to IPBank <br/>
						Empowering Your <span>Financial <br/>Journey</span>
					</h3>
					<span>
						{`At IPBank, our mission is to provide comprehensive banking solutions that empower
						individuals and business to achieve their financial goals. We are committed to delivering
						personalized and innovative services that prioritize our customers' needs.`}
					</span>

					<div>
						<Button label='Open Account' action={() => {}} />
					</div>
				</div>

				<div>
					<Image src={Arrows} alt=''/>

					<CardTransaction />
				</div>
			</section>


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
