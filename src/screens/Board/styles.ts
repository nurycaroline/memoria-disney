import styled from 'styled-components/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export const Container = styled(GestureHandlerRootView) <{ backgroundColor: string }>`
	flex: 1;
	background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const Header = styled.View`
	justify-content: center;
	align-items: center;
`;

export const HeaderButtons = styled.View`
	flex-direction: row;
	justify-content: space-evenly;
	width: 80%;
	margin-top: 30px;
`

export const Footer = styled.View`
	align-items: center;
	justify-content: space-evenly;
	align-content: space-between;
	height: 120px;
`

export const Board = styled.ScrollView<{ size: number }>`
	margin: 20px auto;
	width: 70%;
	height: ${({ size }) => size * 60}px;
`

export const ModalVictoryButtons = styled.View`
	flex-direction: row;
	justify-content: space-evenly;
	width: 80%;
`