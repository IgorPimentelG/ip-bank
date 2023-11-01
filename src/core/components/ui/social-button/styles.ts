import styled from 'styled-components';

export const Container = styled.a`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 50px;
	height: 50px;
	border-radius: 50px;
	font-size: 28px;

	${({ theme }) => `
		color: ${theme.colors['grey-shades']['grey-15']};
		background-color: ${theme.colors['green-shades']['green-60']};
	`};
`;

