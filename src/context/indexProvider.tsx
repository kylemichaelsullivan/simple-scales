import { useCallback, useEffect, useMemo, useState } from 'react';

import { Flats, Frequencies, Intervals, Sharps } from '@/utils/notes';

import type { DisplayIcon, NoteIndex, ScaleMode, ScaleType } from '@/types';

import { IndexContext } from './index';
import type { IndexContextProviderProps } from './types';

const initialTonic: NoteIndex = 0;
const initialVariant: ScaleType = 'major';
const initialUsingFlats: boolean = true;
const initialDisplays: DisplayIcon[] = ['keyboard', 'guitar', 'ukelele', 'mandolin'];
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
				setStoredValue((prev) => {
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
	const [tonic, setTonic] = useState<NoteIndex>(initialTonic);
	const [variant, setVariant] = useState<ScaleType>(initialVariant);
	const [usingFlats, setUsingFlats] = useLocalStorage<boolean>('usingFlats', initialUsingFlats);
	const [notes, setNotes] = useState<NoteIndex[]>(() => {
		const scaleNotes: NoteIndex[] = [initialTonic];
		const intervals = Intervals[initialVariant];
		let currentNote = initialTonic;
		for (const interval of intervals) {
			currentNote = (currentNote + interval * 2) % 12;
			scaleNotes.push(currentNote);
		}
		return scaleNotes;
	});
	const [displays, setDisplays] = useLocalStorage<DisplayIcon[]>(
		'selectedDisplays',
		initialDisplays
	);
	const [notePlaying, setNotePlaying] = useState<boolean>(false);
	const [showNoteLabels, setShowNoteLabels] = useLocalStorage<boolean>(
		'showNoteLabels',
		initialShowNoteLabels
	);
	const [audioContext, setAudioContext] = useState<AudioContext | null>(null);

	const handleTonicChange = useCallback((tonic: NoteIndex) => {
		setTonic(tonic);
	}, []);

	const handleVariantChange = useCallback((variant: ScaleType) => {
		setVariant(variant);
	}, []);

	const handleDisplaysClick = useCallback(
		(icon: DisplayIcon) => {
			setDisplays((prev: DisplayIcon[]) => {
				const newDisplays = prev.includes(icon)
					? prev.filter((item: DisplayIcon) => item !== icon)
					: [...prev, icon];
				return newDisplays;
			});
		},
		[setDisplays]
	);

	const toggleUsingFlats = useCallback(() => {
		setUsingFlats((prev) => !prev);
	}, [setUsingFlats]);

	const toggleShowNoteLabels = useCallback(() => {
		setShowNoteLabels((prev: boolean) => !prev);
	}, [setShowNoteLabels]);

	const capitalizeFirstLetter = useCallback((string: string) => {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}, []);

	const currentScale = useMemo(() => {
		return usingFlats ? Flats : Sharps;
	}, [usingFlats]);

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

	const makeScale = useCallback((tonic: NoteIndex, variantParam: ScaleType) => {
		const intervals = Intervals[variantParam];
		const scaleNotes: NoteIndex[] = [tonic];
		let currentNote = tonic;

		for (const interval of intervals) {
			currentNote = (currentNote + interval * 2) % 12;
			scaleNotes.push(currentNote);
		}

		setNotes(scaleNotes);
	}, []);

	const getRelativeMajor = useCallback(
		(mode: ScaleMode) => {
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
		(mode: ScaleMode) => {
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
