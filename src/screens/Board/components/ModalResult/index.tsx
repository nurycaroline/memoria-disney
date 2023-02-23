import React from 'react';
import Button from 'components/Button';
import Label from 'components/Label';
import Modal from 'components/Modal';
import Colors from 'utils/colors';

import * as S from './styles';

const ModalResul = ({ open, onClosed, children }) => {
	return (
		<Modal
			open={open}
			onClosed={onClosed}
			childrenStyle={{ height: 200 }}
			HeaderComponent={
				<Label
					textAlign='center'
					color={Colors.purple}
					fontSize={28}
				>
					Vitória!
				</Label>
			}
		>
			<S.ModalContainer>
				<S.ModalContainerLabel
					color={Colors.purple}
					fontSize={18}
				>
					Tempo: 0:00
				</S.ModalContainerLabel>
				<S.ModalContainerLabel
					color={Colors.purple}
					fontSize={18}
				>
					Movimentos: 6
				</S.ModalContainerLabel>

				{children}
			</S.ModalContainer>
		</Modal>

	)
}

export default ModalResul;