import React from 'react';
import Lottie from 'lottie-react-native';
import Label from 'components/Label';
import Modal from 'components/Modal';
import Colors from 'utils/colors';
import { ModalizeProps } from 'react-native-modalize';
import { useTranslation } from 'react-i18next'

import AnimationVictoryTrophy from 'assets/animations/107653-trophy.json'
import * as S from './styles';
import { useRecoilValue } from 'recoil';
import { movesState } from 'atoms/gameState';

type ModalVictoryProps = ModalizeProps & {
	open: boolean
}

const ModalVictory = ({ open, onClosed, children }: ModalVictoryProps) => {
	const { t: translation } = useTranslation()
	const moves = useRecoilValue(movesState)


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
							{translation('label.time')}: 0:00
						</S.ModalLabel>
						<S.ModalLabel
							color={Colors.purple}
							fontSize={18}
						>
							{translation('label.moves')}: {moves}
						</S.ModalLabel>
					</S.ModalContainerLabels>
				</S.ContainerGroupAnimationLabels>

				{children}
			</S.ModalContainer>
		</Modal>
	)
}

export default ModalVictory;