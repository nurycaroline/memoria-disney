import { themeColorsState, themeState } from 'atoms/theme'
import React from 'react'
import { useRecoilValue } from 'recoil'
import Princess from './data/princess'
import Villain from './data/villain'

import * as S from './styles'

export enum PRINCESS_ENUM {
	adormecida = 'adormecida',
	bela = 'bela',
	branca = 'branca',
	cinderela = 'cinderela',
	merida = 'merida',
	mulan = 'mulan',
	sereia = 'sereia',
	sininho = 'sininho',
	tiana = 'tiana',
}

export enum VILLAIN_ENUM {
	copas = 'copas',
	cruella = 'cruella',
	gothel = 'gothel',
	ma = 'ma',
	malevola = 'malevola',
	medusa = 'medusa',
	mim = 'mim',
	tremaine = 'tremaine',
	yzma = 'yzma',
}

type ButtonCardProps = {
	characterName: keyof typeof PRINCESS_ENUM | keyof typeof VILLAIN_ENUM
	selected: boolean
	visible: boolean
	onPress: () => void
}


const ButtonCard = ({ characterName, selected, visible, onPress }: ButtonCardProps) => {
	const theme = useRecoilValue(themeState)
	const themeColor = useRecoilValue(themeColorsState)
	const character = theme === 'princess' ? Princess : Villain

	let backgroundColor = themeColor.light

	if (selected || visible) {
		backgroundColor = character[characterName]?.backgroundColor
	}


	return (
		<S.Container
			selected={selected}
			visible={visible}
			onPress={onPress}
			backgroundColor={backgroundColor}
		>
			{
				(selected || visible) && (
					<S.Avatar
						resizeMode="contain"
						source={character[characterName]?.img}
					/>
				)
			}
		</S.Container>
	)
}

export default ButtonCard;