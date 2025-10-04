import { useMemo, memo } from 'react';

import { useIndex } from '@/context';

import ModesHeading from './ModesHeading';
import Mode from './Mode';
import { Intervals } from '@/utils/notes';

import type { ScaleMode } from '@/types';

function Modes() {
	const { tonic, getNote, variant, getRelativeMajor, getRelativeMinor } = useIndex();

	const tonicNote = useMemo(() => getNote(tonic), [getNote, tonic]);

	const generateModes = useMemo(
		() => (tonic: number) => {
			const modes = Object.keys(Intervals).filter(
				key =>
					key !== 'major' &&
					key !== 'minor' &&
					key !== 'pentatonic'
			) as Array<keyof typeof Intervals>;

			return modes.map(mode => {
				const intervals = Intervals[mode] as number[];
				const modeNotes: number[] = [tonic];

				let currentNote = tonic;
				intervals.forEach(interval => {
					currentNote += interval * 2;
					modeNotes.push(currentNote % 12);
				});

				return {
					mode,
					notes: modeNotes.map(getNote),
					relativeMajor: getRelativeMajor(mode as ScaleMode),
					relativeMinor: getRelativeMinor(mode as ScaleMode),
				};
			});
		},
		[getNote, getRelativeMajor, getRelativeMinor]
	);

	const modes = useMemo(() => generateModes(tonic), [tonic, generateModes]);

	const isCurrentMode = useMemo(
		() => (mode: string) => {
			return (
				(variant === 'major' && mode === 'ionian') ||
				(variant === 'minor' && mode === 'aeolian') ||
				variant === mode
			);
		},
		[variant]
	);

	return (
		<div className='Modes border border-slate-500 text-center capitalize shadow-md'>
			<ModesHeading tonicNote={tonicNote} />

			{modes.map(({ mode, notes, relativeMajor, relativeMinor }, index) => (
				<Mode
					mode={mode}
					the_notes={notes}
					background={index % 2 !== 0 ? 'bg-slate-300' : 'bg-slate-200'}
					isCurrent={isCurrentMode(mode)}
					relativeMajor={relativeMajor}
					relativeMinor={relativeMinor}
					key={mode}
				/>
			))}
		</div>
	);
}

export default memo(Modes);
