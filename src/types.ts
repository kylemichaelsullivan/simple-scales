import type { IconName } from './components/Icon';

export type Notes_Flats =
	| 'C'
	| 'D♭'
	| 'D'
	| 'E♭'
	| 'E'
	| 'F'
	| 'G♭'
	| 'G'
	| 'A♭'
	| 'A'
	| 'B♭'
	| 'B';

export type Notes_Sharps =
	| 'C'
	| 'C♯'
	| 'D'
	| 'D♯'
	| 'E'
	| 'F'
	| 'F♯'
	| 'G'
	| 'G♯'
	| 'A'
	| 'A♯'
	| 'B';

export type Scale_Tonics = number;

export type Scale_Modes =
	| 'ionian'
	| 'dorian'
	| 'phrygian'
	| 'lydian'
	| 'mixolydian'
	| 'aeolian'
	| 'locrian';

export type Scale_Variants = 'major' | 'minor' | 'pentatonic' | Scale_Modes;

export type Scale_UsingFlats = boolean;
export type Scale_NoteCount = number;

export type Displays_Text =
	| 'Piano'
	| 'Guitar'
	| 'Banjo'
	| 'Ukelele'
	| 'Mandolin'
	| 'Modes';
export type Displays_Icon = IconName;
