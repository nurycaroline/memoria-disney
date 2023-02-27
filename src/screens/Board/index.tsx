import React, { useEffect, useState } from 'react';
import Button from 'components/Button';
import Label from 'components/Label';
import ButtonCard, { PRINCESS_ENUM } from 'components/ButtonCard';
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

type ImagesCards = {
	princessName: keyof typeof PRINCESS_ENUM
	selected: boolean
	visible: boolean
}[]

const Board: React.FC = () => {
	const [openMenu, setOpenMenu] = useState(false)
	const [openResult, setOpenResult] = useState(false)
	const [victories, setVictories] = useRecoilState(victoriesState)
	const [defeats, setDefeats] = useRecoilState(defeatsState)

	const [imagesCards, setImagesCards] = useState<ImagesCards>([])

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

	useEffect(() => {
		setImagesCards(imagesBySize[size]
			.concat(imagesBySize[size])
			.sort(() => Math.random() - 0.5)
			.map((image) => ({ princessName: image, selected: false, visible: false })))
	}, [size, defeats, victories])

	const verifyEqualCards = () => {
		const newImagesCards = [...imagesCards]
		const selectedCards = newImagesCards.filter((item) => item.selected)

		if (selectedCards.length === 2) {
			const [card1, card2] = selectedCards
			if (card1.princessName === card2.princessName) {
				card1.selected = false
				card2.selected = false
				card1.visible = true
				card2.visible = true
			} else {
				card1.selected = false
				card2.selected = false
			}
			setImagesCards(newImagesCards)

			const visibleCards = newImagesCards.filter((item) => item.visible)
			if (visibleCards.length === (size * 2)) {
				setVictories(victories + 1)
				setOpenResult(true)
			}
		}
	}

	const handleCardPress = async (indexCard: number) => {
		const newImagesCards = [...imagesCards]

		const selectedItem = newImagesCards[indexCard]
		if (!selectedItem) {
			throw new Error('Item not found')
		}

		const selectedCards = newImagesCards.filter((item) => item.selected)
		if (selectedCards.length < 2) {
			newImagesCards[indexCard].selected = true
			setImagesCards(newImagesCards)
		}
	}

	const checkCards = async () => {
		const selectedCards = imagesCards.filter((item) => item.selected)
		if (selectedCards.length === 2) {
			await new Promise(res => {
				setTimeout(res, 1000)
			});
			verifyEqualCards()
		}
	}

	useEffect(() => {
		checkCards()
	}, [imagesCards])


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
					imagesCards.map((item, index) => (
						<ButtonCard
							key={index}
							princessName={item.princessName}
							selected={item.selected}
							visible={item.visible}
							onPress={() => handleCardPress(index)}
						/>
					))
				}
			</S.Board>

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
					<Label color={Colors.pink}>Outro tamanho</Label>
				</Button>
				<Button
					backgroundColor={Colors.purple}
					onPress={() => {
						setOpenResult(false)
					}}
				>
					<Label color={Colors.pink}>Continuar</Label>
				</Button>
			</ModalResul>
		</S.Container>
	)
}

export default Board;