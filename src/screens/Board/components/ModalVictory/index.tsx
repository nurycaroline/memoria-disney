import React from 'react';
import Lottie from 'lottie-react-native';
import Label from 'components/Label';
import Modal from 'components/Modal';
import { ModalizeProps } from 'react-native-modalize';
import { useTranslation } from 'react-i18next'

import AnimationVictoryTrophy from 'assets/animations/107653-trophy.json'
import * as S from './styles';
import { useRecoilValue } from 'recoil';
import { movesState, durationSelector } from 'atoms/gameState';
import { themeColorsState } from 'atoms/theme';

type ModalVictoryProps = ModalizeProps & {
	open: boolean
}

const ModalVictory = ({ open, onClosed, children }: ModalVictoryProps) => {
	const { t: translation } = useTranslation()
	const moves = useRecoilValue(movesState)
	const duration = useRecoilValue(durationSelector)
	const themeColor = useRecoilValue(themeColorsState)

	return (
		<Modal
			open={open}
			onClosed={onClosed}
			childrenStyle={{ height: 200 }}
			HeaderComponent={
				<Label
					textAlign='center'
					color={themeColor.dark}
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
							color={themeColor.dark}
							fontSize={18}
						>
							{translation('label.time')}: {duration}
						</S.ModalLabel>
						<S.ModalLabel
							color={themeColor.dark}
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