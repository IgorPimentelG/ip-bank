import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex: 1;

	& > a {
		font-size: 14px;
		text-align: center;
		text-decoration: underline;
		color: ${({ theme }) => theme.colors['absolute-colors'].white};
	}
`;
