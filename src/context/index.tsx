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
	Scale_Modes,
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
	getRelativeMajor: (mode: Scale_Modes) => string;
	getRelativeMinor: (mode: Scale_Modes) => string;
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
const initialDisplays: Displays_Icon[] = ['keyboard', 'guitar', 'ukelele', 'mandolin'];
const initialShowNoteLabels: boolean = true;

const useLocalStorage = <T,>(
	key: string,
	initialValue: T
): [T, (value: T | ((prev: T) => T)) => void] => {
	const [storedValue, setStoredValue] = useState<T>(() => {
		try {
			const item = localStorage.getItem(key);
			return item ? JSON.parse(item) : initialValue;
		} catch (error) {
			console.error(error);
			return initialValue;
		}
	});

	const setValue = useCallback(
		(value: T | ((prev: T) => T)) => {
			try {
				setStoredValue(prev => {
					const newValue = typeof value === 'function' ? (value as (prev: T) => T)(prev) : value;
					localStorage.setItem(key, JSON.stringify(newValue));
					return newValue;
				});
			} catch (error) {
				console.error(error);
			}
		},
		[key]
	);

	return [storedValue, setValue];
};

export const IndexContextProvider = ({ children }: IndexContextProviderProps) => {
	const [tonic, setTonic] = useState<Scale_Tonics>(initialTonic);
	const [variant, setVariant] = useState<Scale_Variants>(initialVariant);
	const [usingFlats, setUsingFlats] = useLocalStorage<Scale_UsingFlats>(
		'usingFlats',
		initialUsingFlats
	);
	const [notes, setNotes] = useState<Scale_Tonics[]>([tonic]);
	const [displays, setDisplays] = useLocalStorage<Displays_Icon[]>(
		'selectedDisplays',
		initialDisplays
	);
	const [notePlaying, setNotePlaying] = useState<boolean>(false);
	const [showNoteLabels, setShowNoteLabels] = useLocalStorage<boolean>(
		'showNoteLabels',
		initialShowNoteLabels
	);
	const [audioContext, setAudioContext] = useState<AudioContext | null>(null);

	const handleTonicChange = useCallback((tonic: Scale_Tonics) => {
		setTonic(tonic);
	}, []);

	const handleVariantChange = useCallback((variant: Scale_Variants) => {
		setVariant(variant);
	}, []);

	const handleDisplaysClick = useCallback((icon: Displays_Icon) => {
		setDisplays((prev: Displays_Icon[]) => {
			const newDisplays =
				prev.includes(icon) ? prev.filter((item: Displays_Icon) => item !== icon) : [...prev, icon];
			return newDisplays;
		});
	}, []);

	const toggleUsingFlats = useCallback(() => {
		setUsingFlats(prev => !prev);
	}, []);

	const toggleShowNoteLabels = useCallback(() => {
		setShowNoteLabels((prev: boolean) => !prev);
	}, []);

	const capitalizeFirstLetter = useCallback((string: string) => {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}, []);

	const currentScale = useMemo(() => {
		return usingFlats ? Flats : Sharps;
	}, [usingFlats]);

	const currentIntervals = useMemo(() => {
		return Intervals[variant];
	}, [variant]);

	const getFrequency = useCallback((note: number) => {
		return Frequencies[note];
	}, []);

	useEffect(() => {
		const context = new AudioContext();
		setAudioContext(context);
		return () => {
			context.close();
		};
	}, []);

	const playNote = useCallback(
		(note: number) => {
			if (!audioContext || notePlaying) return;

			const oscillator = audioContext.createOscillator();
			oscillator.type = 'sine';
			oscillator.frequency.value = getFrequency(note);
			oscillator.connect(audioContext.destination);

			oscillator.start();
			setNotePlaying(true);

			setTimeout(() => {
				oscillator.stop();
				oscillator.disconnect();
				setNotePlaying(false);
			}, 1000);
		},
		[audioContext, getFrequency, notePlaying]
	);

	const reset = useCallback(() => {
		setTonic(initialTonic);
		setVariant(initialVariant);
	}, []);

	const getNote = useCallback(
		(note: number) => {
			return currentScale[note];
		},
		[currentScale]
	);

	const makeScale = useCallback(
		(tonic: Scale_Tonics) => {
			const scaleNotes: Scale_Tonics[] = [tonic];
			const intervals = currentIntervals;
			let currentNote = tonic;

			intervals.forEach(interval => {
				currentNote = (currentNote + interval * 2) % 12;
				scaleNotes.push(currentNote);
			});

			setNotes(scaleNotes);
		},
		[currentIntervals]
	);

	const getRelativeMajor = useCallback(
		(mode: Scale_Modes) => {
			// For each mode, calculate the relative major key that shares the same key signature
			let relativeMajorNote: number;

			switch (mode) {
				case 'lydian':
					relativeMajorNote = (tonic + 7) % 12;
					break;
				case 'ionian':
					relativeMajorNote = tonic;
					break;
				case 'mixolydian':
					relativeMajorNote = (tonic + 5) % 12;
					break;
				case 'dorian':
					relativeMajorNote = (tonic + 10) % 12;
					break;
				case 'aeolian':
					relativeMajorNote = (tonic + 3) % 12;
					break;
				case 'phrygian':
					relativeMajorNote = (tonic + 8) % 12;
					break;
				case 'locrian':
					relativeMajorNote = (tonic + 1) % 12;
					break;
				default:
					relativeMajorNote = tonic;
			}

			return getNote(relativeMajorNote);
		},
		[tonic, getNote]
	);

	const getRelativeMinor = useCallback(
		(mode: Scale_Modes) => {
			// For each mode, calculate the relative minor key that shares the same key signature
			let relativeMinorNote: number;

			switch (mode) {
				case 'lydian':
					relativeMinorNote = (tonic + 4) % 12;
					break;
				case 'ionian':
					relativeMinorNote = (tonic + 9) % 12;
					break;
				case 'mixolydian':
					relativeMinorNote = (tonic + 2) % 12;
					break;
				case 'dorian':
					relativeMinorNote = (tonic + 7) % 12;
					break;
				case 'aeolian':
					relativeMinorNote = tonic;
					break;
				case 'phrygian':
					relativeMinorNote = (tonic + 5) % 12;
					break;
				case 'locrian':
					relativeMinorNote = (tonic + 10) % 12;
					break;
				default:
					relativeMinorNote = tonic;
			}

			return getNote(relativeMinorNote);
		},
		[tonic, getNote]
	);

	useEffect(() => {
		makeScale(tonic);
	}, [tonic, makeScale]);

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
			getRelativeMajor,
			getRelativeMinor,
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
			getRelativeMajor,
			getRelativeMinor,
			makeScale,
			playNote,
			reset,
		]
	);

	return <IndexContext.Provider value={contextValue}>{children}</IndexContext.Provider>;
};

export const useIndex = (): IndexContextType => {
	const context = useContext(IndexContext);
	if (!context) {
		throw new Error('useIndex must be used within an <IndexContextProvider />');
	}
	return context;
};
