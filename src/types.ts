import type { IconName } from './components/Icon';

export type Note = string;
export type NoteIndex = number;
export type NoteCount = number;

export type ScaleMode =
	| 'ionian'
	| 'dorian'
	| 'phrygian'
	| 'lydian'
	| 'mixolydian'
	| 'aeolian'
	| 'locrian';

export type ScaleType = 'major' | 'minor' | 'pentatonic' | ScaleMode;

export type DisplayText = 'Piano' | 'Guitar' | 'Banjo' | 'Ukelele' | 'Mandolin' | 'Modes';

export type DisplayIcon = IconName;
