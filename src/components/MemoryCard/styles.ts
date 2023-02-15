import styled, { css } from 'styled-components/native';

type Memory = {
	selected: boolean
	visible: boolean
}

type Avatar = {
	selected: boolean
	visible: boolean
}

export const Avatar = styled.Image<Avatar>`
	width: 70px;
	height: 70px;

	display: none;

	${({ visible, selected }) => (visible || selected) && css`
		display: block;
	`}
`

export const Container = styled.View<Memory>`
	background-color: #F1F1F1;
	border-radius: 100%;

	align-items: center;
	justify-content: center;

	width: 75px;
	height: 75px;

	${({ selected }) => selected && css`
		background-color: #F18B8B;
	`}

	${({ visible }) => visible && css`
		background-color: #E4CBCB;
	`}
`;