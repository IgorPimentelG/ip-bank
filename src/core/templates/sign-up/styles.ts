import { Abstract4 } from '@/core/assets';
import styled from 'styled-components';

export const Container = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 100px;
	padding: 0 100px;
`;

export const Card = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 60%;
	padding: 88px 30px;
	border-radius: 20px;
	overflow: hidden;
	border: 1px solid ${({ theme }) => theme.colors['grey-shades']['grey-15']};
	background-image: url(${Abstract4.src});
	background-size: cover;
	background-blend-mode: overlay, normal;

	& > img {
		position: absolute;
		right: 1px;
		top: 1px;
	}

	& > form {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 24px;
		margin-top: 60px;
		width: 80%;
		margin-bottom: 38px;
	}

	& > div:nth-child(4) {
		display: flex;
		flex-direction: column;
		width: 350px;
		gap: 12px;

		button {
			width: 100%;
		}
	}

	& > div:nth-child(6) {
		display: flex;
		align-items: center;
		gap: 12px;
		width: 340px;
		margin: 28px 0;

		${({ theme }) => `
			color: ${theme.colors['grey-shades']['grey-70']};

			& > hr {
				border-color: ${theme.colors['grey-shades']['grey-70']};
			}
		`};

		& > span {
			white-space: nowrap;
			font-size: 14px;
		}

		& > hr {
			display: flex;
			flex: 1;
		}
	}
`;

export const ActionWrap = styled.div`
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 350px;
		gap: 12px;
		margin-top: 28px;
`;

export const SocialWrap = styled.div`
	display: flex;
	gap: 28px;
`;

export const Title = styled.h1`
	font-weight: 500;
	color: ${({ theme }) => theme.colors['green-shades']['green-60']};
	font-size: 38px;
	margin-bottom: 20px;
`;

export const Description = styled.span`
	font-size: 14px;
	text-align: center;
	white-space: pre-line;
	color: ${({ theme }) => theme.colors['grey-shades']['grey-75']};
`;
