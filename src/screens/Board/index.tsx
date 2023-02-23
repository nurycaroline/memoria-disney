import React, { useState } from 'react';
import Button from 'components/Button';
import Label from 'components/Label';
import MemoryCard from 'components/MemoryCard';
import Colors from 'utils/colors';
import ModalMenu from './components/ModalMenu';
import ModalResul from './components/ModalResult';

import * as S from './styles';

const Board: React.FC = () => {
	const [openMenu, setOpenMenu] = useState(false)
	const [openResult, setOpenResult] = useState(false)

	const handleCloseMenu = () => {
		setOpenMenu(false)
	}

	const handleCloseResult = () => {
		setOpenResult(false)
	}

	return (
		<S.Container>
			<S.Header>
				<Label fontSize={50} color={Colors.red}>Memória</Label>

				<S.HeaderButtons>
					<Button backgroundColor={Colors.pink}>
						<Label color={Colors.purple}>Reinciar</Label>
					</Button>

					<Button
						backgroundColor={Colors.purple}
						onPress={() => setOpenMenu(true)}
					>
						<Label color={Colors.pink}>Novo</Label>
					</Button>
				</S.HeaderButtons>
			</S.Header>

			<MemoryCard
				princessName="bela"
				selected={true}
				visible={true}
			/>

			<Button
				backgroundColor={Colors.purple}
				onPress={() => setOpenResult(true)}
			>
				<Label color={Colors.pink}>RESULTADO</Label>
			</Button>

			<S.Footer>
				<Label color={Colors.purple}>Tempo: 00:00</Label>
				<Label color={Colors.purple}>Movimentos: 20</Label>
			</S.Footer>

			<ModalMenu open={openMenu} onClosed={handleCloseMenu} />
			<ModalResul open={openResult} onClosed={handleCloseResult}>
				<Button
					backgroundColor={Colors.purple}
					onPress={() => {
						setOpenResult(false)
						setOpenMenu(true)
					}}
				>
					<Label color={Colors.pink}>Novo</Label>
				</Button>
			</ModalResul>
		</S.Container>
	)
}

export default Board;