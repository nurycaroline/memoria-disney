import React from 'react';
import { useFonts, PrincessSofia_400Regular } from '@expo-google-fonts/princess-sofia';

import * as S from './styles';

type LabelProps = {
	children: React.ReactNode
	color: string
	textAlign?: 'center' | 'left' | 'right'
	fontSize?: number
	style?: any
}

const Label = ({
	children,
	color,
	fontSize = 16,
	textAlign = 'left',
	style
}: LabelProps) => {
	let [fontsLoaded] = useFonts({
		PrincessSofia_400Regular,
	});

	if (!fontsLoaded) {
		return null;
	}

	return (
		<S.Container style={style}>
			<S.Text
				color={color}
				style={{
					fontFamily: 'PrincessSofia_400Regular',
					textAlign,
					fontSize,
				}}
			>
				{children}
			</S.Text>
		</S.Container>
	)
}

export default Label;