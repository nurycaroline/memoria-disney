import {
	atom,
} from 'recoil';

export const sizeState = atom<3 | 6 | 9>({
	key: 'sizeState',
	default: 3,
});

export const victoriesState = atom<number>({
	key: 'victoriesState',
	default: 0, 
	// TODO: set sempre somando + 1
});

export const defeatsState = atom<number>({
	key: 'defeatsState',
	default: 0,
	// TODO: set sempre somando + 1
});
