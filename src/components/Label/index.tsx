import React from 'react';
import { useFonts, PrincessSofia_400Regular } from '@expo-google-fonts/princess-sofia';

import * as S from './styles';

type LabelProps = {
	text: string
	color: string
}

const Label = ({ text, color }: LabelProps) => {
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
					fontFamily: 'PrincessSofia_400Regular'
				}}
			>
				{text}
			</S.Text>
		</S.Container>
	)
}

export default Label;