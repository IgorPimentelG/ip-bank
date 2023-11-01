"use client";

import { LogoDesktop } from '@/core/assets';
import { SocialButton } from '@/core/components/ui';
import Image from 'next/image';
import { FC } from 'react';
import {
	BsFacebook,
	BsFillEnvelopeFill,
	BsFillGeoAltFill,
	BsFillTelephoneFill,
	BsLinkedin,
	BsTwitter
} from 'react-icons/bs';
import { Container, Info, Infos, Link, ServiceWrapper } from './styles';

export const Footer: FC = () => {
	return (
		<Container>
			<div>
				<Image alt="IPBank logo" src={LogoDesktop} />
			</div>

			<nav>
				<Link href='/home'>Home</Link>
				<Link href='/careers'>Careers</Link>
				<Link href='/about'>About</Link>
				<Link href='/security'>Security</Link>
			</nav>

			<Infos>
				<hr />
				<div>
					<Info>
						<BsFillEnvelopeFill size={18} />
						<span>hello@mail.com</span>
					</Info>
					<Info>
						<BsFillTelephoneFill />
						<span>+91 91813 23 2309</span>
					</Info>
					<Info>
						<BsFillGeoAltFill />
						<span>Somewhere in the World</span>
					</Info>
				</div>
				<hr />
			</Infos>

			<ServiceWrapper>
				<div>
					<SocialButton to='#'>
						<BsFacebook />
					</SocialButton>

					<SocialButton to='#'>
						<BsTwitter />
					</SocialButton>

					<SocialButton to='#'>
						<BsLinkedin />
					</SocialButton>
				</div>

				<div>
					<span>IPBank All Rights Reserved</span>
				</div>

				<div>
					<span>Privacy Policy</span>
					<span>|</span>
					<span>Terms of Service</span>
				</div>
			</ServiceWrapper>
		</Container>
	);
}
