import type { DisplayIcon, DisplayText } from '@/types';

type DisplayItem = Record<DisplayIcon, DisplayText>;

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
