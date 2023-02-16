import React from 'react'
import { Text, Image, ImageSourcePropType } from 'react-native'

import adormecida from '../images/adormecida.png'
import bela from '../images/bela.png'
import branca from '../images/branca.png'
import cinderela from '../images/cinderela.png'
import merida from '../images/merida.png'
import mulan from '../images/mulan.png'
import sereia from '../images/sereia.png'
import sininho from '../images/sininho.png'
import tiana from '../images/tiana.png'

import * as S from './styles'

enum PRINCESS_ENUM {
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

type MemoryCardProps = {
	princessName: keyof typeof PRINCESS_ENUM
	selected: boolean
	visible: boolean
}

const PRINCESS_IMAGE: { [k: string]: ImageSourcePropType } = {
	adormecida,
	bela,
	branca,
	cinderela,
	merida,
	mulan,
	sereia,
	sininho,
	tiana,
}

const MemoryCard = ({ princessName, selected, visible }: MemoryCardProps) => {

	return (
		<S.Container selected={selected} visible={visible}>
			{
				(selected || visible) && (
					<S.Avatar
						source={PRINCESS_IMAGE[princessName]}
					/>
				)
			}
		</S.Container>
	)
}

export default MemoryCard;