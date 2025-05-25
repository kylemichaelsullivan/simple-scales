import { useMemo } from 'react';

import { useIndex } from '../../../context';
import { Intervals } from '../../../lookups/Notes';

import ModesHeading from './ModesHeading';
import Mode from './Mode';

function Modes() {
	const { tonic, getNote, variant, usingFlats } = useIndex();

	const tonicNote = getNote(tonic);

	const generateModes = useMemo(
		() => (tonic: number) => {
			const modes = Object.keys(Intervals).filter(
				(key) => key !== 'major' && key !== 'minor' && key !== 'pentatonic',
			) as Array<keyof typeof Intervals>;

			return modes.map((mode) => {
				const intervals = Intervals[mode] as number[];
				const modeNotes: number[] = [tonic];

				let currentNote = tonic;
				intervals.forEach((interval) => {
					currentNote += interval * 2;
					modeNotes.push(currentNote % 12);
				});

				return { mode, notes: modeNotes.map(getNote) };
			});
		},
		[getNote],
	);

	const modes = useMemo(
		() => generateModes(tonic),
		[tonic, usingFlats, generateModes],
	);

	return (
		<div className='Modes border border-slate-500 text-center capitalize shadow-md'>
			<ModesHeading tonicNote={tonicNote} />

			{modes.map(({ mode, notes }, index) => (
				<Mode
					mode={mode}
					the_notes={notes}
					background={index % 2 !== 0 ? 'bg-slate-300' : 'bg-slate-200'}
					isCurrent={
						(variant === 'major' && mode === 'ionian') ||
						(variant === 'minor' && mode === 'aeolian') ||
						variant === mode
					}
					key={mode}
				/>
			))}
		</div>
	);
}

export default Modes;
