import React, { useEffect, useState } from 'react';
import Button from 'components/Button';
import Label from 'components/Label';
import ButtonCard, { PRINCESS_ENUM } from 'components/ButtonCard';
import Colors from 'utils/colors';
import delay from 'utils/delay';
import ModalMenu from './components/ModalMenu';
import ModalVictory from './components/ModalVictory';
import { defeatsState, movesState, sizeState, victoriesState } from 'atoms/gameState';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useTranslation } from 'react-i18next'

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
	const [openModalVictory, setOpenModalVictory] = useState(false)
	const [imagesCards, setImagesCards] = useState<ImagesCards>([])

	const [victories, setVictories] = useRecoilState(victoriesState)
	const [defeats, setDefeats] = useRecoilState(defeatsState)
	const [moves, setMoves] = useRecoilState(movesState)
	const size = useRecoilValue(sizeState)

	const { t: translation } = useTranslation()

	const handleCloseMenu = () => {
		setOpenMenu(false)
	}

	const handleCloseResult = () => {
		setOpenModalVictory(false)
	}

	const handleReset = () => {
		setDefeats(defeats + 1)
	}

	const handleContinue = () => {
		setOpenModalVictory(false)
		randomizeImages()
	}

	const randomizeImages = () => {
		setImagesCards(imagesBySize[size]
			.concat(imagesBySize[size])
			.sort(() => Math.random() - 0.5)
			.map((image) => ({ princessName: image, selected: false, visible: false })))
	}

	useEffect(() => {
		randomizeImages()
		setMoves(0)
	}, [size, defeats])

	const verifyEqualCards = () => {
		const newImagesCards = [...imagesCards]
		const selectedCards = newImagesCards.filter((item) => item.selected)

		if (selectedCards.length === 2) {
			const [card1, card2] = selectedCards
			card1.visible = card1.princessName === card2.princessName
			card2.visible = card1.princessName === card2.princessName

			card1.selected = false
			card2.selected = false
			setImagesCards(newImagesCards)

			const visibleCards = newImagesCards.filter((item) => item.visible)
			if (visibleCards.length === (size * 2)) {
				setVictories(victories + 1)
				setOpenModalVictory(true)
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
			await delay(500)
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
				<Label fontSize={50} color={Colors.red}>{translation('title')}</Label>

				<S.HeaderButtons>
					<Button
						backgroundColor={Colors.pink}
						onPress={handleReset}
					>
						<Label color={Colors.purple}>{translation('button.reset')}</Label>
					</Button>

					<Button
						backgroundColor={Colors.purple}
						onPress={() => setOpenMenu(true)}
					>
						<Label color={Colors.pink}>{translation('button.newGame')}</Label>
					</Button>
				</S.HeaderButtons>
			</S.Header>

			<S.Board size={size}>
				{imagesCards.map((item, index) => (
					<ButtonCard
						key={index}
						princessName={item.princessName}
						selected={item.selected}
						visible={item.visible}
						onPress={() => {
							handleCardPress(index)
							setMoves(moves + 1)
						}}
					/>
				))}
			</S.Board>

			<S.Footer>
				<Label color={Colors.purple}>{translation('label.time')}: 00:00</Label>
				<Label color={Colors.purple}>{translation('label.moves')}: {moves}</Label>
				<Label color={Colors.purple}>{translation('label.victory')}: {victories}</Label>
				<Label color={Colors.purple}>{translation('label.defeat')}: {defeats}</Label>
			</S.Footer>

			<ModalMenu open={openMenu} onClosed={handleCloseMenu} />

			<ModalVictory open={openModalVictory} onClosed={handleCloseResult}>
				<S.ModalVictoryButtons>
					<Button
						backgroundColor={Colors.purple}
						onPress={() => {
							setOpenModalVictory(false)
							setOpenMenu(true)
						}}
					>
						<Label color={Colors.pink}>{translation('button.newGame')}</Label>
					</Button>
					<Button
						backgroundColor={Colors.pink}
						onPress={handleContinue}
					>
						<Label color={Colors.purple}>{translation('button.continue')}</Label>
					</Button>
				</S.ModalVictoryButtons>
			</ModalVictory>
		</S.Container>
	)
}

export default Board;