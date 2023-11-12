import styled from 'styled-components';

export const Container = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 12px 24px;
	border-radius: 100px;
	font-size: 16px;
	width: 100%;
	background-color: ${({ theme }) => theme.colors['green-shades']['green-60']};

	& > span {
		white-space: nowrap;
		font-size: 14px;
		letter-spacing: 1px;
	}

	&[data-style = 'PRIMARY'] {
		${({ theme }) => `
			color: ${theme.colors['grey-shades']['grey-15']};
			background-color: ${theme.colors['green-shades']['green-60']};
		`};
	}

	&[data-style = 'SECONDARY'] {
		${({ theme }) => `
			color: ${theme.colors['absolute-colors'].white};
			background-color: ${theme.colors['grey-shades']['grey-15']};
		`};
	}

	&[data-style  = 'INLINE'] {
		background-color: transparent;
		color: ${({ theme }) => theme.colors['absolute-colors'].white};
	}
`;

