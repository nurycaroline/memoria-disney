import { atom, selector } from 'recoil';
import ColorsPrincess from './colors/colorsPrincess';
import ColorsVillain from './colors/colorsVillain';

type ThemeColorProps = {
	background: string
	dark: string
	darkOpacity: string
	light: string
}

export const themeState = atom<'princess' | 'villain'>({
	key: 'themeState',
	default: 'princess',
});

export const themeColorsState = selector<ThemeColorProps>({
	key: 'themeColorsState',
	get: ({ get }) => {
		const theme = get(themeState);
		return theme === 'princess' ? ColorsPrincess : ColorsVillain;
	}
});
