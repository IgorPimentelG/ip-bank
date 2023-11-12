import styled from 'styled-components';

export const Container = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 100px 50px;
	color: ${({ theme }) => theme.colors['absolute-colors'].white};

	& > section:nth-child(1) {
		display: flex;
		width: 90%;
		justify-content: space-between;

		& > div:nth-child(1) {
			display: flex;
			flex-direction: column;

			& > h3 {
				font-size: 48px;
				margin: 24px 0 14px 0;
				line-height: 64px;

				& > span {
					color: ${({ theme }) => theme.colors['green-shades']['green-60']};
				}
			}

			& > span {
				line-height: 28px;
				margin-bottom: 38px;
				color: ${({ theme }) => theme.colors['white-shadees']['white-90']};
				white-space: pre-line;
			}

		}
	}
`;

export const Badge = styled.div`
	display: inline-flex;
	align-items: center;
	gap: 8px;
	padding: 6px 12px;
	border-radius: 20px;
	width: fit-content;

	& > span {
		font-size: 12px;
		letter-spacing: 1px;
		opacity: 0.7;
	}

	${({ theme }) => `
		background-color: ${theme.colors['grey-shades']['grey-15']};

		svg {
			font-size: 18px;
			color: ${theme.colors['green-shades']['green-60']};
		}
	`};
`;


