import { default as NextLink } from 'next/link';
import styled from 'styled-components';

export const Container = styled.footer`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	padding: 100px 100px 50px 100px;
	background-color: ${({ theme }) => theme.colors['grey-shades']['grey-11']};

	img {
		object-fit: cover;
	}

	nav {
		display: flex;
		margin-top: 50px;
		gap: 24px;
	}
`;

export const ServiceWrapper = styled.div`
	display: flex;
	width: 100%;
	padding: 14px 24px 14px 14px;
	justify-content: space-between;
	align-items: center;
	background-color: ${({ theme }) => theme.colors['grey-shades']['grey-10']};
	border: 1px solid rgba(179, 179, 179, 0.1);
	box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
	border-radius: 50px;
	margin-top: 12px;

	& > div:nth-child(1),
	& > div:nth-child(3) {
		display: flex;
		gap: 14px;
	}

	& span {
		color: ${({ theme }) => theme.colors['grey-shades']['grey-70']};
	}
`;

export const Infos = styled.div`
	margin: 100px 0;
	width: 100%;

	& > div {
		display: flex;
		justify-content: center;
		gap: 24px;
	}

	hr {
		opacity: 0.1;
		border: 1px solid ${({ theme }) => theme.colors['grey-shades']['grey-15']};
	}
`;

export const Info = styled.div`
	display: flex;
	gap: 8px;
	align-items: center;

	svg {
		color: ${({ theme }) => theme.colors['green-shades']['green-60']};
	}

	span {
		font-size: 18px;
		color: ${({ theme }) => theme.colors['white-shadees']['white-90']};
	}
`;

export const Link = styled(NextLink)`
	font-size: 18px;
	transition: all .5s;
	color: ${({ theme }) => theme.colors['white-shadees']['white-90']};

	&:hover {
		transform: scale(1.1);
	}
`;
