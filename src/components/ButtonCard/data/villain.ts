import { ImageSourcePropType } from 'react-native'

import copas from 'assets/images/villain/copas.png'
import cruella from 'assets/images/villain/cruella.png'
import gothel from 'assets/images/villain/gothel.png'
import ma from 'assets/images/villain/ma.png'
import malevola from 'assets/images/villain/malevola.png'
import medusa from 'assets/images/villain/medusa.png'
import mim from 'assets/images/villain/mim.png'
import tremaine from 'assets/images/villain/tremaine.png'
import yzma from 'assets/images/villain/yzma.png'

type VillainImageProps = {
	[k: string]: {
		img: ImageSourcePropType
		backgroundColor: string
	}
}

export default {
	copas: {
		img: copas,
		backgroundColor: '#F7C694'
	},
	cruella: {
		img: cruella,
		backgroundColor: '#CDC7C7'
	},
	gothel: {
		img: gothel,
		backgroundColor: '#F6CBB0'
	},
	ma: {
		img: ma,
		backgroundColor: '#000000'
	},
	malevola: {
		img: malevola,
		backgroundColor: '#B7C6A5'
	},
	medusa: {
		img: medusa,
		backgroundColor: '#F7D0D3'
	},
	mim: {
		img: mim,
		backgroundColor: '#F4CAE0'
	},
	tremaine: {
		img: tremaine,
		backgroundColor: '#DCBEBB'
	},
	yzma: {
		img: yzma,
		backgroundColor: '#B4AACD'
	},
} as VillainImageProps