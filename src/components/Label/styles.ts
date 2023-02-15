import styled from 'styled-components/native';

export const Container = styled.View`
`;

type TextProps = {
	color: string
}

export const Text = styled.Text<TextProps>`
	color: ${({ color }) => color};
`