import React from 'react';
import Lottie from 'lottie-react-native';
import Label from 'components/Label';
import Modal from 'components/Modal';
import Colors from 'utils/colors';
import { ModalizeProps } from 'react-native-modalize';

import AnimationVictoryTrophy from 'assets/animations/107653-trophy.json'
import * as S from './styles';

type ModalVictoryProps = ModalizeProps & {
	open: boolean
}

const ModalVictory = ({ open, onClosed, children }: ModalVictoryProps) => {
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
				<S.ContainerGroupAnimationLabels>
					<S.ContainerAnimationVictoryThophy>
						<Lottie source={AnimationVictoryTrophy} autoPlay loop />
					</S.ContainerAnimationVictoryThophy>

					<S.ModalContainerLabels>
						<S.ModalLabel
							color={Colors.purple}
							fontSize={18}
						>
							Tempo: 0:00
						</S.ModalLabel>
						<S.ModalLabel
							color={Colors.purple}
							fontSize={18}
						>
							Movimentos: 6
						</S.ModalLabel>
					</S.ModalContainerLabels>
				</S.ContainerGroupAnimationLabels>

				{children}
			</S.ModalContainer>
		</Modal>
	)
}

export default ModalVictory;