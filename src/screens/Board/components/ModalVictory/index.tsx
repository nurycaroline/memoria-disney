import React from 'react';
import Lottie from 'lottie-react-native';
import Label from 'components/Label';
import Modal from 'components/Modal';
import Colors from 'utils/colors';
import { ModalizeProps } from 'react-native-modalize';
import * as S from './styles';

type ModalVictoryProps = ModalizeProps & {
	open: boolean
}

const ModalVictory = ({ open, onClosed, children }: ModalVictoryProps) => {
	return (
		<Modal
			overlayStyle={{ backgroundColor: Colors.purple }}
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

export default ModalVictory;