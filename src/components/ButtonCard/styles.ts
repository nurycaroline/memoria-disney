import styled, { css } from 'styled-components/native';
import Colors from 'utils/colors'

type Memory = {
	selected: boolean
	visible: boolean
}


export const Avatar = styled.Image`
	width: 70px;
	height: 70px;
`

export const Container = styled.TouchableOpacity<Memory>`
	background-color: ${Colors.gray};
	border-radius: 100px;

	align-items: center;
	justify-content: center;

	width: 75px;
	height: 75px;

	${({ selected }) => selected && css`
		background-color: ${Colors.red};
	`}

	${({ visible }) => visible && css`
		background-color: ${Colors.pink};
	`}
`;