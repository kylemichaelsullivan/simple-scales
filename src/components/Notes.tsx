import { useEffect, useState } from 'react';

import { useIndex } from '@/context';
import { Intervals } from '@/utils/notes';

import type { NoteCount } from '@/types';

function Notes() {
	const { variant, notes, getNote } = useIndex();

	const [noteCount, setNoteCount] = useState<NoteCount>(Intervals[variant].length + 1);

	useEffect(() => {
		setNoteCount(Intervals[variant].length + 1);
	}, [variant]);

	const getGridClass = (count: number) => {
		switch (count) {
			case 5:
				return 'grid-cols-5';
			case 6:
				return 'grid-cols-6';
			case 7:
				return 'grid-cols-7';
			case 8:
				return 'grid-cols-8';
			default:
				return 'grid-cols-7'; // fallback
		}
	};

	const gridClass = getGridClass(noteCount);

	return (
		<div className='Notes border border-slate-500 bg-slate-200 text-center shadow-md'>
			<div className={`grid ${gridClass}`}>
				{Array.from({ length: noteCount }, (_, index) => (
					<div key={index + 1}>{index + 1}</div>
				))}
			</div>

			<div className={`grid ${gridClass}`}>
				{notes.map((note: number, i: number) => (
					<div key={`${note}-${i}`}>{getNote(note)}</div>
				))}
			</div>
		</div>
	);
}

export default Notes;
