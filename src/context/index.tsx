import {
	useState,
	useEffect,
	createContext,
	useContext,
	type ReactNode,
} from 'react';

import type {
	Scale_Tonics,
	Scale_Variants,
	Scale_UsingFlats,
	Displays_Icon,
} from '../types';

import { Flats, Sharps, Intervals, Frequencies } from '../lookups/Notes';

type IndexContextType = {
	tonic: Scale_Tonics;
	variant: Scale_Variants;
	usingFlats: Scale_UsingFlats;
	notes: number[];
	displays: Displays_Icon[];
	showNoteLabels: boolean;
	handleTonicChange: (tonic: number) => void;
	handleVariantChange: (variant: Scale_Variants) => void;
	handleDisplaysClick: (icon: Displays_Icon) => void;
	capitalizeFirstLetter: (string: string) => string;
	toggleUsingFlats: () => void;
	toggleShowNoteLabels: () => void;
	getNote: (note: number) => string;
	makeScale: (tonic: Scale_Tonics, variant: Scale_Variants) => void;
	playNote: (note: number) => void;
	reset: () => void;
};

const IndexContext = createContext<IndexContextType | undefined>(undefined);

type IndexContextProviderProps = {
	children: ReactNode;
};

const initialTonic: Scale_Tonics = 0;
const initialVariant: Scale_Variants = 'major';
const initialUsingFlats: Scale_UsingFlats = true;
const initialDisplays: Displays_Icon[] = [
	'/src/icons/keyboard.svg',
	'/src/icons/guitar.svg',
	'/src/icons/banjo.svg',
	'/src/icons/ukelele.svg',
];
const initialShowNoteLabels: boolean = true;

export const IndexContextProvider = ({
	children,
}: IndexContextProviderProps) => {
	const [tonic, setTonic] = useState<Scale_Tonics>(initialTonic);
	const [variant, setVariant] = useState<Scale_Variants>(initialVariant);
	const [usingFlats, setUsingFlats] =
		useState<Scale_UsingFlats>(initialUsingFlats);
	const [notes, setNotes] = useState<Scale_Tonics[]>([tonic]);
	const [displays, setDisplays] = useState<Displays_Icon[]>(initialDisplays);
	const [notePlaying, setNotePlaying] = useState<boolean>(false);
	const [showNoteLabels, setShowNoteLabels] = useState<boolean>(
		initialShowNoteLabels,
	);

	function handleTonicChange(tonic: Scale_Tonics) {
		setTonic(tonic);
	}

	function handleVariantChange(variant: Scale_Variants) {
		setVariant(variant);
	}

	function handleDisplaysClick(icon: Displays_Icon) {
		const updatedDisplays = displays.includes(icon)
			? displays.filter((item) => item !== icon)
			: [...displays, icon];

		setDisplays(updatedDisplays);
	}

	function toggleUsingFlats() {
		setUsingFlats(!usingFlats);
	}

	function toggleShowNoteLabels() {
		setShowNoteLabels(!showNoteLabels);
	}

	function capitalizeFirstLetter(string: string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	function getNote(note: number) {
		const scale = usingFlats ? Flats : Sharps;
		return scale[note];
	}

	function makeScale(tonic: Scale_Tonics, variant: Scale_Variants) {
		const scaleNotes: Scale_Tonics[] = [tonic];
		const intervals = Intervals[variant];
		let currentNote = tonic;

		intervals.map((interval) => {
			currentNote = (currentNote + interval * 2) % 12;
			scaleNotes.push(currentNote);
		});

		setNotes(scaleNotes);
	}

	function getFrequency(note: number) {
		return Frequencies[note];
	}

	function playNote(note: number) {
		window.AudioContext = window.AudioContext;
		const context = new AudioContext();

		const oscillator = context.createOscillator();
		oscillator.type = 'sine';
		oscillator.frequency.value = getFrequency(note);
		oscillator.connect(context.destination);

		if (!notePlaying) {
			oscillator.start();
			setNotePlaying(true);
		}

		setTimeout(() => {
			oscillator.stop();
			setNotePlaying(false);
		}, 1000);
	}

	function reset() {
		setTonic(initialTonic);
		setVariant(initialVariant);
	}

	useEffect(() => {
		makeScale(tonic, variant);
	}, [tonic, variant]);

	useEffect(() => {
		const handleKeyUp = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				reset();
			}
		};

		window.addEventListener('keyup', handleKeyUp);

		return () => {
			window.removeEventListener('keyup', handleKeyUp);
		};
	}, []);

	return (
		<IndexContext.Provider
			value={{
				tonic,
				variant,
				usingFlats,
				notes,
				displays,
				showNoteLabels,
				handleTonicChange,
				handleVariantChange,
				handleDisplaysClick,
				toggleUsingFlats,
				toggleShowNoteLabels,
				capitalizeFirstLetter,
				getNote,
				makeScale,
				playNote,
				reset,
			}}
		>
			{children}
		</IndexContext.Provider>
	);
};

export const useIndex = (): IndexContextType => {
	const context = useContext(IndexContext);
	if (!context) {
		throw new Error('useIndex must be used within an <IndexContextProvider />');
	}
	return context;
};
