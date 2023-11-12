import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 150px;
	width: 100%;
	gap: 100px;
`;

export const Header = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-end;

	& > div:nth-child(1) {
		display: flex;
		flex-direction: column;
		gap: 12px;

		& > h3 {
			font-size: 38px;
			font-weight: 500;

			${({ theme }) => `
				color: ${theme.colors['absolute-colors'].white};

				& > span {
					color: ${theme.colors['green-shades']['green-60']};
				}
			`};
		}

		& > p {
			white-space: pre-line;
			color: ${({ theme }) => theme.colors['grey-shades']['grey-70']};
		}
	}
`;

export const Button = styled.button `
	display: flex;
	height: 50px;
	width: 50px;
	border-radius: 50px;
	align-items: center;
	justify-content: center;
	transition: all .2s;

	${({ theme }) => `
		border: 1px solid ${theme.colors['grey-shades']['grey-15']};
		background-color: ${theme.colors['grey-shades']['grey-11']};

		& > svg {
			color: ${theme.colors['green-shades']['green-60']};
			font-size: 28px;
		}
	`};

	&:hover {
		transform: scale(1.1);
	}
`;

export const Content = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 16px;
	width: 100%;

	& > div:nth-child(2) {
		display: flex;
		align-items: center;
		gap: 16px;
		width: 100%;

		& > hr {
			display: flex;
			flex: 1;
			height: 1px;
			opacity: 0.2;
			border-color: ${({ theme }) => theme.colors['grey-shades']['grey-15']};
		}
	}

	${({ theme }) => `
		& > p {
			text-align: center;
			line-height: 28px;
			color: ${theme.colors['absolute-colors'].white};
		}

		& > span {
			display: flex;
			align-items: end;
			height: 100%;
			margin-top: 18px;
			color: ${theme.colors['green-shades']['green-60']};
		}
	`};
`;

