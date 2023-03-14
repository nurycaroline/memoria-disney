import { PRINCESS_ENUM, VILLAIN_ENUM } from 'components/ButtonCard';

const princessBySize = {
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

const villainBySize = {
	3: [
		VILLAIN_ENUM.copas,
		VILLAIN_ENUM.cruella,
		VILLAIN_ENUM.gothel,
	],
	6: [
		VILLAIN_ENUM.copas,
		VILLAIN_ENUM.cruella,
		VILLAIN_ENUM.gothel,
		VILLAIN_ENUM.ma,
		VILLAIN_ENUM.malevola,
		VILLAIN_ENUM.medusa,
	],
	9: [
		VILLAIN_ENUM.copas,
		VILLAIN_ENUM.cruella,
		VILLAIN_ENUM.gothel,
		VILLAIN_ENUM.ma,
		VILLAIN_ENUM.malevola,
		VILLAIN_ENUM.medusa,
		VILLAIN_ENUM.mim,
		VILLAIN_ENUM.tremaine,
		VILLAIN_ENUM.yzma,
	]
}

export {
	princessBySize,
	villainBySize
}