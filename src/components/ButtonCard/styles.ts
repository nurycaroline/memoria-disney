import styled from 'styled-components/native';

type Memory = {
	selected: boolean
	visible: boolean
	backgroundColor: string
}

export const Avatar = styled.Image`
	width: 70px;
	height: 70px;
`

export const Container = styled.TouchableOpacity<Memory>`
	background-color: ${({ backgroundColor }) => backgroundColor};
	border-radius: 100px;

	align-items: center;
	justify-content: center;

	width: 75px;
	height: 75px;

	margin: 5px;
`;