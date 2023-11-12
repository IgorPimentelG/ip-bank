"use client";

import { Abstract3, LogoMobile } from '@/core/assets';
import { Button } from '@/core/components/ui';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { FC } from 'react';
import { Container, NavbarWrapper } from './styles';

export const Navbar: FC = () => {

	const pathname = usePathname();
	const router = useRouter();

	function isSelected(name: string) {
		return pathname.includes(name) ? 'SECONDARY' : 'INLINE';
	}

	return (
		<Container>
			<div>
				<Image src={Abstract3} alt='Image abstract' />
			</div>

			<NavbarWrapper>
				<Image src={LogoMobile} alt='Logo IPBank' />

				<nav>
					<Button
						label='Home'
						type={isSelected('home')}
						action={() => router.push('/home')}
					/>
					<Button
						label='Careers'
						type={isSelected('careers')}
						action={() => router.push('/careers')}
					/>
					<Button
						label='About'
						type={isSelected('about')}
						action={() => router.push('/about')}
					/>
					<Button
						label='Security'
						type={isSelected('security')}
						action={() => router.push('/security')}
					/>
				</nav>

				<div>
					<Button label='Sign Up' type='INLINE' action={() => router.push('/sign-up')} />
					<Button label='Login' action={() => router.push('/sign-in')} />
				</div>
			</NavbarWrapper>
		</Container>
	);
}
