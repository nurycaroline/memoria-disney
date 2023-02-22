import React, { useEffect, useRef } from 'react';
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
			{...props}
		>
			{children}
		</Modalize >
	)
}

export default Modal;