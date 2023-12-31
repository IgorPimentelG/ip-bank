"use client";

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { Abstract1 } from '@/core/assets';
import { CardTestimonials } from '@/core/components/layout';
import { Button, Input, Link, SocialButton } from '@/core/components/ui';
import { BsApple, BsFacebook, BsGoogle } from 'react-icons/bs';
import { ActionWrap, Card, Container, Description, SocialWrap, Title } from './styles';

export const SignInTemplate = () => {

	const router = useRouter();

	return (
		<Container>
			<Card>
				<Image src={Abstract1} alt='Image abstract' loading='eager' />
				<Title>Login</Title>
				<Description>Welcome back! Please log in access your account.</Description>

				<form>
					<Input placeholder='Enter your Email' />
					<Input placeholder='Enter your Password' type='password' />
				</form>

				<Link to='#' label='Forgot Password?'/>

				<ActionWrap>
					<Button label='Login' action={() => alert('This part was not developed.')} />
					<Button label='Sign Up' type='SECONDARY' action={() => router.push('/sign-up')} />
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
