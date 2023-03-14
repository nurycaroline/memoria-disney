import React, { useEffect, useRef } from 'react';
import { Modalize, ModalizeProps } from 'react-native-modalize';
import { themeColorsState } from 'atoms/theme';
import { useRecoilValue } from 'recoil';

type ModalProps = ModalizeProps & {
	open: boolean
}

const Modal = ({ children, open, ...props }: ModalProps) => {
	const modalizeRef = useRef<Modalize>();
	const themeColor = useRecoilValue(themeColorsState)

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
				backgroundColor: themeColor.darkOpacity,
			}}
			{...props}
		>
			{children}
		</Modalize >
	)
}

export default Modal;
