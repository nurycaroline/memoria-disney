import React, { Children } from 'react';
import { useFonts, PrincessSofia_400Regular } from '@expo-google-fonts/princess-sofia';

import * as S from './styles';

type LabelProps = {
	children: string
	color: string
	fontSize?: number
}

const Label = ({ children, color, fontSize = 14 }: LabelProps) => {
	let [fontsLoaded] = useFonts({
		PrincessSofia_400Regular,
	});

	if (!fontsLoaded) {
		return null;
	}

	return (
		<S.Container>
			<S.Text
				color={color}
				style={{
					fontFamily: 'PrincessSofia_400Regular',
					fontSize
				}}
			>
				{children}
			</S.Text>
		</S.Container>
	)
}

export default Label;