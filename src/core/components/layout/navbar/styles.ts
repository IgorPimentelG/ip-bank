import styled from 'styled-components';

export const Container = styled.header`
	display: flex;
	justify-content: center;
	padding: 50px;

	& > div:nth-child(1) {
		position: absolute;
		left: -20px;
		top: -20px;
		z-index: -1;

		& img {
			width: 600px;
			height: 400px;
			object-fit: cover;
		}
	}
`;

export const NavbarWrapper = styled.div`
	display: flex;
	width: 80%;
	padding: 14px 24px;
	border-radius: 50px;
	justify-content: space-between;
	align-items: center;
	border: 1px solid rgba(179, 179, 179, 0.1);
	box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
	background-color: ${({ theme }) => theme.colors['grey-shades']['grey-11']};

	& > nav, & > div {
		display: flex;
		gap: 8px;
	}
`;
