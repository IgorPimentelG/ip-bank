import styled from 'styled-components';

export const Container = styled.a`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 50px;
	height: 50px;
	border-radius: 50px;
	z-index: 10;
	font-size: 28px;

	${({ theme }) => `
		color: ${theme.colors['grey-shades']['grey-15']};
		background-color: ${theme.colors['green-shades']['green-60']};

		&[data-style='HIGHLIGHTED'] {
			font-size: 18px;
			color: ${theme.colors['green-shades']['green-60']};
			width: 40px;
			height: 40px;
			border-top: 1px solid rgba(202, 255, 51, 0.05);
			background: linear-gradient(180deg, rgba(202, 255, 51, 0.10) -66.22%, rgba(202, 255, 51, 0.00) 85.46%);

			& > div {
				position: absolute;
				z-index: 9;
				width: 55px;
				height: 55px;
				border-radius: 70px;
				background: linear-gradient(180deg, rgba(202, 255, 51, 0.05) 0%, rgba(202, 255, 51, 0.00) 100%);
		}
	`};
`;

