import type { Displays_Icon, Displays_Text } from '../types';

type DisplayItem = Record<Displays_Icon, Displays_Text>;

export const allDisplays: DisplayItem[] = [
	{
		'/src/icons/keyboard.svg': 'Piano',
		'/src/icons/guitar.svg': 'Guitar',
		'/src/icons/banjo.svg': 'Banjo',
		'/src/icons/ukelele.svg': 'Ukelele',
		'/src/icons/stand.svg': 'Modes',
	},
];
