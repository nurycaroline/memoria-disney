import React from 'react';
import { View } from 'react-native';
import Lottie from 'lottie-react-native';
import AnimationCastle from 'assets/animations/112589-castle.json'
import colorsPrincess from 'atoms/colors/colorsPrincess';

const Splashscreen: React.FC = () => {
	return (
		<View style={{ flex: 1, backgroundColor: colorsPrincess.dark }}>
			<Lottie source={AnimationCastle} autoPlay loop />
		</View>
	)
}

export default Splashscreen;