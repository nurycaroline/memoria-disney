import React, { useEffect, useRef } from 'react';
import { View } from 'react-native';
import { Modalize, ModalizeProps } from 'react-native-modalize';
import colors from '../../utils/colors';
import Label from '../Label';

type ModalProps = ModalizeProps & {
	open: boolean
}

const Modal = ({ open, ...props }: ModalProps) => {
	const modalizeRef = useRef<Modalize>();

	useEffect(() => {
		if (open) {
			modalizeRef.current?.open();
		} else {
			modalizeRef.current?.close();
		}
	}, [open])


	return (
		<Modalize
			{...props}
			ref={modalizeRef}
			modalHeight={500}
		>
			<View>
				<Label color={colors.purple}>Tamanhos:</Label>
			</View>
		</Modalize>
	)
}

export default Modal;