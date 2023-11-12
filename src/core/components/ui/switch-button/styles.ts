import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	gap: 8px;
	padding: 14px;
	height: fit-content;
	border-radius: 50px;

	${({ theme }) => `
			border: 1px solid ${theme.colors['grey-shades']['grey-15']};
			background-color: ${theme.colors['grey-shades']['grey-11']};
	`};
`;

