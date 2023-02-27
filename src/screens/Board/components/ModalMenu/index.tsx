import React from 'react';
import Button from 'components/Button';
import Label from 'components/Label';
import Modal from 'components/Modal';
import Colors from 'utils/colors';
import { ModalizeProps } from 'react-native-modalize';
import * as S from './styles';
import { useRecoilState } from 'recoil';
import { sizeState, defeatsState } from 'atoms/gameState';

type ModalMenuProps = ModalizeProps & {
	open: boolean
}

const ModalMenu = ({ open, onClosed }: ModalMenuProps) => {
	const [size, setSize] = useRecoilState(sizeState)
	const [defeated, setDefeated] = useRecoilState(defeatsState)

	const handleNewGame = (size: 3 | 6 | 9) => { 
		setSize(size)
		setDefeated(defeated + 1)
	}

	return (
		<Modal
			open={open}
			onClosed={onClosed}
			childrenStyle={{ height: 250 }}
			HeaderComponent={
				<Label textAlign='center' color={Colors.purple} fontSize={28}>Tamanho:</Label>
			}
		>
			<S.ModalContainer>
				<Button
					onPress={() => handleNewGame(3)}
					backgroundColor={size === 3 ? Colors.gray : Colors.pink}
				>
					<Label color={Colors.purple}>3</Label>
				</Button>
				<Button
					onPress={() => handleNewGame(6)}
					backgroundColor={size === 6 ? Colors.gray : Colors.pink}
				>
					<Label color={Colors.purple}>6</Label>
				</Button>
				<Button
					onPress={() => handleNewGame(9)}
					backgroundColor={size === 9 ? Colors.gray : Colors.pink}
				>
					<Label color={Colors.purple}>9</Label>
				</Button>
			</S.ModalContainer>
		</Modal>
	)
}

export default ModalMenu;