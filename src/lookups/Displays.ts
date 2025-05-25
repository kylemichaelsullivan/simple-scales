import type { Displays_Icon, Displays_Text } from '../types';

type DisplayItem = Record<Displays_Icon, Displays_Text>;

export const allDisplays: DisplayItem[] = [
	{
		keyboard: 'Piano',
		guitar: 'Guitar',
		banjo: 'Banjo',
		ukelele: 'Ukelele',
		mandolin: 'Mandolin',
		stand: 'Modes',
	},
];
