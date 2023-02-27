import React, { useCallback, useDebugValue, useEffect, useMemo, useState } from 'react';
import Button from 'components/Button';
import Label from 'components/Label';
import MemoryCard, { PRINCESS_ENUM } from 'components/MemoryCard';
import Colors from 'utils/colors';
import ModalMenu from './components/ModalMenu';
import ModalResul from './components/ModalResult';
import { defeatsState, sizeState, victoriesState } from 'atoms/gameState';
import { useRecoilState, useRecoilValue } from 'recoil';

import * as S from './styles';

const imagesBySize = {
	3: [
		PRINCESS_ENUM.adormecida,
		PRINCESS_ENUM.bela,
		PRINCESS_ENUM.branca,
	],
	6: [
		PRINCESS_ENUM.adormecida,
		PRINCESS_ENUM.cinderela,
		PRINCESS_ENUM.bela,
		PRINCESS_ENUM.merida,
		PRINCESS_ENUM.branca,
		PRINCESS_ENUM.mulan,
	],
	9: [
		PRINCESS_ENUM.adormecida,
		PRINCESS_ENUM.cinderela,
		PRINCESS_ENUM.bela,
		PRINCESS_ENUM.merida,
		PRINCESS_ENUM.branca,
		PRINCESS_ENUM.mulan,
		PRINCESS_ENUM.sereia,
		PRINCESS_ENUM.sininho,
		PRINCESS_ENUM.tiana,
	]
}

const Board: React.FC = () => {
	const [openMenu, setOpenMenu] = useState(false)
	const [openResult, setOpenResult] = useState(false)
	const [victories, setVictories] = useRecoilState(victoriesState)
	const [defeats, setDefeats] = useRecoilState(defeatsState)

	const size = useRecoilValue(sizeState)

	const handleCloseMenu = () => {
		setOpenMenu(false)
	}

	const handleCloseResult = () => {
		setOpenResult(false)
	}


	const handleReset = () => {
		setDefeats(defeats + 1)
	}

	const randomizedImages = useMemo(() => {
		return imagesBySize[size].concat(imagesBySize[size])
			.sort(() => Math.random() - 0.5)
	}, [size, defeats, victories])

	// TODO: colocar scroll no board
	return (
		<S.Container>
			<S.Header>
				<Label fontSize={50} color={Colors.red}>Memória</Label>

				<S.HeaderButtons>
					<Button
						backgroundColor={Colors.pink}
						onPress={handleReset}
					>
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

			<S.Board size={size}>
				{
					randomizedImages.map((image, index) => (
						<MemoryCard
							key={index}
							princessName={image}
							selected={true}
							visible={true}
						/>
					))
				}
			</S.Board>

			<Button
				backgroundColor={Colors.purple}
				onPress={() => setOpenResult(true)}
			>
				<Label color={Colors.pink}>RESULTADO</Label>
			</Button>

			<S.Footer>
				<Label color={Colors.purple}>Tempo: 00:00</Label>
				<Label color={Colors.purple}>Movimentos: 20</Label>
				<Label color={Colors.purple}>Vitórias: {victories}</Label>
				<Label color={Colors.purple}>Derrota: {defeats}</Label>
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