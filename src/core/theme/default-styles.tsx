import { createGlobalStyle } from 'styled-components';

export const DefaultStyles = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	html, body {
		min-height: 100vh;
		width: 100vw;
	}

	body {
		background-color: ${({ theme }) => theme.colors['grey-shades']['gray-10']};
	}

	a, button {
		cursor: pointer;
	}

	a {
		outline: none;
		text-decoration: none;
	}

	button {
		border: none;
		background-color: transparent;
	}
`;


