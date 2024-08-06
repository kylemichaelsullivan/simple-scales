import type { Displays_Emoji, Displays_Text } from '../types';

type DisplayItem = Record<Displays_Emoji, Displays_Text>;

export const allDisplays: DisplayItem[] = [
  { '🎹': 'Piano', '🎸': 'Guitar', '🪕': 'Banjo', '🏝️': 'Ukelele' },
];
