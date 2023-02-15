import React, { Children } from 'react';
import { TouchableOpacity, Text } from 'react-native';

import * as S from './styles';

type ButtonProps = {
	children: JSX.Element
	backgroundColor: string
}

const Button = ({ children, backgroundColor }: ButtonProps) => {
	return (
		<S.Container backgroundColor={backgroundColor}>
			{children}
		</S.Container>
	);
}

export default Button;