import { ImageSourcePropType } from 'react-native'

import adormecida from 'assets/images/princess/adormecida.png'
import bela from 'assets/images/princess/bela.png'
import branca from 'assets/images/princess/branca.png'
import cinderela from 'assets/images/princess/cinderela.png'
import merida from 'assets/images/princess/merida.png'
import mulan from 'assets/images/princess/mulan.png'
import sereia from 'assets/images/princess/sereia.png'
import sininho from 'assets/images/princess/sininho.png'
import tiana from 'assets/images/princess/tiana.png'

type PrincessImageProps = {
	[k: string]: {
		img: ImageSourcePropType
		backgroundColor: string
	}
}

export default {
	adormecida: {
		img: adormecida,
		backgroundColor: '#EFCA7A'
	},
	bela: {
		img: bela,
		backgroundColor: '#F5EBAE'
	},
	branca: {
		img: branca,
		backgroundColor: '#F5A8AD'
	},
	cinderela: {
		img: cinderela,
		backgroundColor: '#C0DEF2'
	},
	merida: {
		img: merida,
		backgroundColor: '#F9A094'
	},
	mulan: {
		img: mulan,
		backgroundColor: '#8E6E7A'
	},
	sereia: {
		img: sereia,
		backgroundColor: '#9E9AB3'
	},
	sininho: {
		img: sininho,
		backgroundColor: '#97B192'
	},
	tiana: {
		img: tiana,
		backgroundColor: '#CAD1A5'
	},
} as PrincessImageProps