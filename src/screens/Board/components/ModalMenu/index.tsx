import React from 'react';
import Button from 'components/Button';
import Label from 'components/Label';
import Modal from 'components/Modal';
import { ModalizeProps } from 'react-native-modalize';
import * as S from './styles';
import { useRecoilState, useRecoilValue } from 'recoil';
import { sizeState, defeatsState } from 'atoms/gameState';
import { useTranslation } from 'react-i18next'
import { themeColorsState, themeState } from 'atoms/theme';

type ModalMenuProps = ModalizeProps & {
	open: boolean
}

const ModalMenu = ({ open, onClosed }: ModalMenuProps) => {
	const [size, setSize] = useRecoilState(sizeState)
	const [defeated, setDefeated] = useRecoilState(defeatsState)
	const [theme, setTheme] = useRecoilState(themeState)
	const themeColor = useRecoilValue(themeColorsState)
	const { t: translation } = useTranslation()

	const handleNewGame = (size: 3 | 6 | 9, theme: 'princess' | 'villain') => {
		setTheme(theme)
		setSize(size)
		setDefeated(defeated + 1)
		onClosed?.()
	}

	return (
		<Modal
			open={open}
			onClosed={onClosed}
			childrenStyle={{ height: 250 }}
			HeaderComponent={
				<Label
					textAlign='center'
					color={themeColor.dark}
					fontSize={28}
				>
					{translation('label.sizes')}:
				</Label>
			}
		>
			<S.ModalContainer>
				<S.ModalContainerGroup>
					<Label
						textAlign='center'
						color={themeColor.dark}
						fontSize={16}
					>
						{translation('label.princess')}:
					</Label>
					<Button
						onPress={() => handleNewGame(3, 'princess')}
						backgroundColor={themeColor.light}
					>
						<Label color={themeColor.dark}>3</Label>
					</Button>
					<Button
						onPress={() => handleNewGame(6, 'princess')}
						backgroundColor={themeColor.light}
					>
						<Label color={themeColor.dark}>6</Label>
					</Button>
					<Button
						onPress={() => handleNewGame(9, 'princess')}
						backgroundColor={themeColor.light}
					>
						<Label color={themeColor.dark}>9</Label>
					</Button>
				</S.ModalContainerGroup>
				<S.ModalContainerGroup>
					<Label
						textAlign='center'
						color={themeColor.dark}
						fontSize={16}
					>
						{translation('label.villain')}:
					</Label>
					<Button
						onPress={() => handleNewGame(3, 'villain')}
						backgroundColor={themeColor.dark}
					>
						<Label color={themeColor.light}>3</Label>
					</Button>
					<Button
						onPress={() => handleNewGame(6, 'villain')}
						backgroundColor={themeColor.dark}
					>
						<Label color={themeColor.light}>6</Label>
					</Button>
					<Button
						onPress={() => handleNewGame(9, 'villain')}
						backgroundColor={themeColor.dark}
					>
						<Label color={themeColor.light}>9</Label>
					</Button>
				</S.ModalContainerGroup>
			</S.ModalContainer>
		</Modal>
	)
}

export default ModalMenu;