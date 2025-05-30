import {
	useState,
	useEffect,
	createContext,
	useContext,
	useCallback,
	useMemo,
	type ReactNode,
} from 'react';

import { Flats, Sharps, Intervals, Frequencies } from '@/lookups/Notes';

import type {
	Scale_Tonics,
	Scale_Variants,
	Scale_UsingFlats,
	Displays_Icon,
} from '@/types';

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
	'keyboard',
	'guitar',
	'ukelele',
	'mandolin',
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

	const handleTonicChange = useCallback((tonic: Scale_Tonics) => {
		setTonic(tonic);
	}, []);

	const handleVariantChange = useCallback((variant: Scale_Variants) => {
		setVariant(variant);
	}, []);

	const handleDisplaysClick = useCallback((icon: Displays_Icon) => {
		setDisplays((prev) =>
			prev.includes(icon)
				? prev.filter((item) => item !== icon)
				: [...prev, icon],
		);
	}, []);

	const toggleUsingFlats = useCallback(() => {
		setUsingFlats((prev) => !prev);
	}, []);

	const toggleShowNoteLabels = useCallback(() => {
		setShowNoteLabels((prev) => !prev);
	}, []);

	const capitalizeFirstLetter = useCallback((string: string) => {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}, []);

	const getNote = useCallback(
		(note: number) => {
			const scale = usingFlats ? Flats : Sharps;
			return scale[note];
		},
		[usingFlats],
	);

	const makeScale = useCallback(
		(tonic: Scale_Tonics, variant: Scale_Variants) => {
			const scaleNotes: Scale_Tonics[] = [tonic];
			const intervals = Intervals[variant];
			let currentNote = tonic;

			intervals.forEach((interval) => {
				currentNote = (currentNote + interval * 2) % 12;
				scaleNotes.push(currentNote);
			});

			setNotes(scaleNotes);
		},
		[],
	);

	const getFrequency = useCallback((note: number) => {
		return Frequencies[note];
	}, []);

	const playNote = useCallback(
		(note: number) => {
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
				oscillator.disconnect();
				context.close();
				setNotePlaying(false);
			}, 1000);
		},
		[getFrequency, notePlaying],
	);

	const reset = useCallback(() => {
		setTonic(initialTonic);
		setVariant(initialVariant);
	}, []);

	useEffect(() => {
		makeScale(tonic, variant);
	}, [tonic, variant, makeScale]);

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
	}, [reset]);

	const contextValue = useMemo(
		() => ({
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
		}),
		[
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
		],
	);

	return (
		<IndexContext.Provider value={contextValue}>
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
