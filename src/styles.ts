import styled from 'styled-components/native';
import Label from './components/Label';

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

export const ModalMenuContainer = styled.View`
	align-items: center;
	justify-content: space-evenly;
	height: 250px;
`

export const ModalResultContainer = styled.View`
	align-items: center;
	justify-content: center;
	gap: 20px;
	height: 200px;
`

export const ModalResultContainerLabel = styled(Label)`
	margin: 10px 0;
`
