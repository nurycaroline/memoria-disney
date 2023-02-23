import styled from 'styled-components/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export const Container = styled(GestureHandlerRootView)`
	flex: 1;
`;

export const Header = styled.View`
	margin-top: 20px;
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
	flex-direction: row;
	align-items: center;
	justify-content: space-evenly;
`
