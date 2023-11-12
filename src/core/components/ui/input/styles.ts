import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex: 1;
	align-items: center;
	border-radius: 50px;
	padding: 8px 22px;

	${({ theme }) => `
		background-color: ${theme.colors['grey-shades']['grey-10']};
		border: 1px solid ${theme.colors['grey-shades']['grey-15']};

		svg {
			color: ${theme.colors['grey-shades']['grey-35']};
			font-size: 16px;
		}
	`};

	& > input {
		padding: 8px 0;
		font-size: 16px;
		width: 100%;
		outline: none;
		border: none;
		background-color: transparent;
		color: ${({ theme }) => theme.colors['grey-shades']['grey-35']};

		&[type=password]::-ms-reveal,
		&[typeMeta=password]::-ms-clear {
			display: none;
		}
	}
`;
