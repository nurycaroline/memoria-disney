import React from 'react';
import Button from '../../../../components/Button';
import Label from '../../../../components/Label';
import Modal from '../../../../components/Modal';
import Colors from '../../../../utils/colors';

import * as S from './styles';

const ModalMenu = ({open, onClosed}) => {
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
				<Button backgroundColor={Colors.pink}>
					<Label color={Colors.purple}>3</Label>
				</Button>
				<Button backgroundColor={Colors.pink}>
					<Label color={Colors.purple}>6</Label>
				</Button>
				<Button backgroundColor={Colors.pink}>
					<Label color={Colors.purple}>9</Label>
				</Button>
			</S.ModalContainer>
		</Modal>
	)
}

export default ModalMenu;