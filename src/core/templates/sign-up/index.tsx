"use client";

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { Abstract1 } from '@/core/assets';
import { CardTestimonials } from '@/core/components/layout';
import { Button, Input, SocialButton } from '@/core/components/ui';
import { BsApple, BsFacebook, BsGoogle } from 'react-icons/bs';
import { ActionWrap, Card, Container, Description, SocialWrap, Title } from './styles';

export const SignUpTemplate = () => {

	const router = useRouter();

	return (
		<Container>
			<Card>
				<Image src={Abstract1} alt='Image abstract' loading='eager' />
				<Title>Sign Up</Title>
				<Description>
					{`Join our community today! Create an account to unlock exclusive features and \n personalized expiences`}
				</Description>

				<form>
					<Input placeholder='Enter First Name' />
					<Input placeholder='Enter Last Name' />
					<Input placeholder='Enter your Email' />
					<Input placeholder='Enter your Password' type='password' />
				</form>

				<ActionWrap>
					<Button label='Sign Up' action={() => alert('This part was not developed.')} />
					<Button label='Login' type='SECONDARY' action={() => router.push('/sign-in')} />
				</ActionWrap>

				<div>
					<hr />
					<span>Or Continue With</span>
					<hr/>
				</div>

				<SocialWrap>
					<SocialButton to='#' style='HIGHLIGHTED'>
						<BsGoogle />
					</SocialButton>

					<SocialButton to='#' style='HIGHLIGHTED'>
						<BsFacebook />
					</SocialButton>

					<SocialButton to='#' style='HIGHLIGHTED'>
						<BsApple />
					</SocialButton>
				</SocialWrap>
			</Card>

			<CardTestimonials />
		</Container>
	);
}
