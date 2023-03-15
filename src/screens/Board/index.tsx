import React, { useEffect, useState } from 'react';
import Button from 'components/Button';
import Label from 'components/Label';
import ButtonCard, { PRINCESS_ENUM, VILLAIN_ENUM } from 'components/ButtonCard';
import delay from 'utils/delay';
import ModalMenu from './components/ModalMenu';
import ModalVictory from './components/ModalVictory';
import { defeatsState, durationSelector, durationState, movesState, sizeState, victoriesState } from 'atoms/gameState';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useTranslation } from 'react-i18next'
import { Audio } from 'expo-av'

import * as S from './styles';
import { intervalToDuration } from 'date-fns';
import { princessBySize, villainBySize } from './imagesBySize';
import { themeColorsState, themeState } from 'atoms/theme';


type ImagesCards = {
	characterName: keyof typeof PRINCESS_ENUM | keyof typeof VILLAIN_ENUM
	selected: boolean
	visible: boolean
}[]

const Board: React.FC = () => {
	const [openMenu, setOpenMenu] = useState(false)
	const [openModalVictory, setOpenModalVictory] = useState(false)
	const [imagesCards, setImagesCards] = useState<ImagesCards>([])
	const [timerInterval, setTimerInterval] = useState<NodeJS.Timer | null>(null)
	const [timer, setTimer] = useState<Date>()
	const [music, setMusic] = useState<Audio.Sound>()

	const [victories, setVictories] = useRecoilState(victoriesState)
	const [defeats, setDefeats] = useRecoilState(defeatsState)
	const [moves, setMoves] = useRecoilState(movesState)
	const [_, setDuration] = useRecoilState(durationState)

	const duration = useRecoilValue(durationSelector)
	const size = useRecoilValue(sizeState)
	const theme = useRecoilValue(themeState)
	const themeColor = useRecoilValue(themeColorsState)

	const { t: translation } = useTranslation()

	const handleCloseMenu = () => {
		setOpenMenu(false)
	}

	const handleReset = () => {
		setDefeats(defeats + 1)
	}

	const handleContinue = () => {
		setOpenModalVictory(false)
		randomizeImages()
		setDuration(null)
		setMoves(0)
	}

	const randomizeImages = () => {
		if (timerInterval) {
			clearInterval(timerInterval)
		}
		setTimerInterval(null)
		setTimer(undefined)
		setDuration(null)

		const characterBySize = theme === 'princess' ? princessBySize : villainBySize
		setImagesCards([
			...characterBySize[size],
			...characterBySize[size]
		]
			.sort(() => Math.random() - 0.5)
			.map((image) => ({ characterName: image, selected: false, visible: false })))
	}

	const verifyEqualCards = () => {
		const newImagesCards = [...imagesCards]
		const selectedCards = newImagesCards.filter((item) => item.selected)

		if (selectedCards.length === 2) {
			const [card1, card2] = selectedCards
			card1.visible = card1.characterName === card2.characterName
			card2.visible = card1.characterName === card2.characterName

			card1.selected = false
			card2.selected = false
			setImagesCards(newImagesCards)

			const visibleCards = newImagesCards.filter((item) => item.visible)
			if (visibleCards.length === (size * 2)) {
				setVictories(victories + 1)
				setOpenModalVictory(true)
				if (timerInterval) {
					clearInterval(timerInterval)
				}
				setTimerInterval(null)
				setTimer(undefined)
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

	const handleStarTimer = () => {
		if (timerInterval === null) {
			const myTimer = timer || new Date()
			setTimer(myTimer)

			setTimerInterval(
				setInterval(() => {
					const duracao = intervalToDuration({
						start: myTimer,
						end: new Date()
					})
					setDuration(duracao)
				}, 1000)
			)
		}
	}

	useEffect(() => {
		randomizeImages()
		setMoves(0)
	}, [size, defeats, theme])

	useEffect(() => {
		checkCards()
	}, [imagesCards])

	useEffect(() => {
		async function prepare() {
			try {
				music?.stopAsync()

				const localSong = theme === 'princess'
					? require('../../assets/music/All_Kinds_Of_Magic/music.mp3')
					: require('../../assets/music/Repressed_Stress/music.mp3')

				const { sound } = await Audio.Sound.createAsync(localSong)
				await sound?.playAsync()
				setMusic(sound)
			} catch (e) {
				console.warn(e)
			}
		}

		prepare()
	}, [theme])
		
	return (
		<S.Container backgroundColor={themeColor.background}>
			<S.Header>
				<Label fontSize={50} color={themeColor.dark}>{translation('title')}</Label>

				<S.HeaderButtons>
					<Button
						backgroundColor={themeColor.light}
						onPress={handleReset}
					>
						<Label color={themeColor.dark}>{translation('button.reset')}</Label>
					</Button>

					<Button
						backgroundColor={themeColor.dark}
						onPress={() => setOpenMenu(true)}
					>
						<Label color={themeColor.light}>{translation('button.newGame')}</Label>
					</Button>
				</S.HeaderButtons>
			</S.Header>

			<S.Board
				size={size}
				centerContent
				contentContainerStyle={{
					flexDirection: 'row',
					flexWrap: 'wrap',
					justifyContent: 'center',
					flexGrow: 1,
					alignContent: 'center',
				}}
			>
				{imagesCards.map((item, index) => (
					<ButtonCard
						key={index}
						characterName={item.characterName}
						selected={item.selected}
						visible
						// visible={item.visible}
						onPress={() => {
							handleCardPress(index)
							setMoves(moves + 1)
							handleStarTimer()
						}}
					/>
				))}
			</S.Board>

			<S.Footer>
				<Label color={themeColor.dark}>{translation('label.time')}: {duration}</Label>
				<Label color={themeColor.dark}>{translation('label.moves')}: {moves}</Label>
				<Label color={themeColor.dark}>{translation('label.victory')}: {victories}</Label>
				<Label color={themeColor.dark}>{translation('label.defeat')}: {defeats}</Label>
			</S.Footer>

			<ModalMenu open={openMenu} onClosed={handleCloseMenu} />

			<ModalVictory open={openModalVictory} onClosed={handleContinue}>
				<S.ModalVictoryButtons>
					<Button
						backgroundColor={themeColor.dark}
						onPress={() => {
							setOpenModalVictory(false)
							setOpenMenu(true)
							setDuration(null)
						}}
					>
						<Label color={themeColor.light}>{translation('button.newGame')}</Label>
					</Button>
					<Button
						backgroundColor={themeColor.light}
						onPress={handleContinue}
					>
						<Label color={themeColor.dark}>{translation('button.continue')}</Label>
					</Button>
				</S.ModalVictoryButtons>
			</ModalVictory>
		</S.Container>
	)
}

export default Board;