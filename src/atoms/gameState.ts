import { atom, selector } from 'recoil';

export const sizeState = atom<3 | 6 | 9>({
	key: 'sizeState',
	default: 3,
});

export const victoriesState = atom<number>({
	key: 'victoriesState',
	default: 0,
});

export const defeatsState = atom<number>({
	key: 'defeatsState',
	default: 0,
});

export const movesState = atom<number>({
	key: 'movesState',
	default: 0,
});

export const durationState = atom<Duration | null>({
	key: 'durationState',
	default: null,
});

export const durationSelector = selector({
	key: 'duration',
	get: ({ get }) => {
		const duration = get(durationState)
		if (!duration) return '00:00'

		const seconds = duration.seconds && duration.seconds < 10 ? `0${duration.seconds}` : duration.seconds
		const minutes = duration.minutes && duration.minutes < 10 ? `0${duration.minutes}` : duration.minutes

		return `${minutes}:${seconds}`
	}
});
