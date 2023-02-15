import React from 'react';
import { View, Text } from 'react-native';

import * as S from './styles';

type LabelProps = {
	text: string
	color: string
}

const Label = ({ text, color }: LabelProps) => {
	return (
		<S.Container>
			<S.Text color={color}>{text}</S.Text>
		</S.Container>
	)
}

export default Label;