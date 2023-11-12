import styled from 'styled-components';

export const Card = styled.div`
	display: flex;
	flex-direction: column;
	gap: 28px;

	& > div:nth-child(1) {
		display: flex;
		flex-direction: column;
		padding: 24px;
		border-radius: 20px;
		border: 1px solid ${({ theme }) => theme.colors['grey-shades']['grey-15']};

		& > span {
			font-size: 18px;
		}

		& > span:nth-child(3) {
			font-size: 16px;
			text-align: center;
			padding: 18px;
			border-radius: 50px;
			background-color: #22251B;
			color: ${({ theme }) => theme.colors['green-shades']['green-60']};
		}
	}
`;

export const Badge = styled.div`
	display: flex;
	padding: 8px 8px 8px 28px;
	align-items: center;
	gap: 12px;
	border-radius: 50px;
	background-color: #22251B;

	& > span {
		font-size: 18px;
		color: ${({ theme }) => theme.colors['absolute-colors'].white};
	}

	& > div {
		display: flex;
		padding: 8px;
		border-radius: 50px;
		gap: 8px;

		${({ theme }) => `
			background-color: ${theme.colors['grey-shades']['grey-10']};

			& > div {
				display: flex;
				align-items: center;
				justify-content: center;
				width: 40px;
				height: 40px;
				border-radius: 25px;
				background-color: ${theme.colors['grey-shades']['grey-15']};

				svg {
					font-size: 22px;
					color: ${theme.colors['green-shades']['green-60']};
				}
			}
		`};
	}
`;
