import React, { useEffect, useRef } from 'react';
import Colors from 'utils/colors';
import { Modalize, ModalizeProps } from 'react-native-modalize';

type ModalProps = ModalizeProps & {
	open: boolean
}

const Modal = ({ children, open, ...props }: ModalProps) => {
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
			ref={modalizeRef}
			adjustToContentHeight
			overlayStyle={{
				backgroundColor: Colors.purpleOpacity,
			}}
			{...props}
		>
			{children}
		</Modalize >
	)
}

export default Modal;