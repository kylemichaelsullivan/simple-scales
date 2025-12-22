import type { ReactNode } from 'react';

import type { DisplayIcon, NoteIndex, ScaleMode, ScaleType } from '@/types';

export type IndexContextType = {
	tonic: NoteIndex;
	variant: ScaleType;
	usingFlats: boolean;
	notes: number[];
	displays: DisplayIcon[];
	showNoteLabels: boolean;
	handleTonicChange: (tonic: number) => void;
	handleVariantChange: (variant: ScaleType) => void;
	handleDisplaysClick: (icon: DisplayIcon) => void;
	capitalizeFirstLetter: (string: string) => string;
	toggleUsingFlats: () => void;
	toggleShowNoteLabels: () => void;
	getNote: (note: number) => string;
	getRelativeMajor: (mode: ScaleMode) => string;
	getRelativeMinor: (mode: ScaleMode) => string;
	makeScale: (tonic: NoteIndex, variant: ScaleType) => void;
	playNote: (note: number) => void;
	reset: () => void;
};

export type IndexContextProviderProps = {
	children: ReactNode;
};
