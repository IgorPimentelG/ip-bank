import styled from 'styled-components';

export const Container = styled.div`
	display: inline-flex;
	align-items: center;
	position: relative;
	overflow: hidden;
	gap: 50px;
	width: fit-content;
	padding: 50px;
	border-radius: 20px;
	border: 1px solid ${({ theme }) => theme.colors['grey-shades']['grey-15']};
	background: linear-gradient(267deg, #1C1C1C 40.67%, rgba(28, 28, 28, 0.00) 99.81%);

	& > img {
		object-fit: cover;
		position: absolute;
		left: 0;
		top: 0;
	}

	& > div {
		width: fit-content;
	}
`;

export const Content = styled.div`
	& > p {
		font-size: 14px;
		white-space: pre-line;
		margin-top: 8px;
		color: ${({ theme }) => theme.colors['grey-shades']['grey-70']};
	}
`;

export const Title = styled.span`
	font-size: 33px;
	color: ${({ theme }) => theme.colors['absolute-colors'].white};

	& > span {
			color: ${({ theme }) => theme.colors['green-shades']['green-60']};
		}
`;

