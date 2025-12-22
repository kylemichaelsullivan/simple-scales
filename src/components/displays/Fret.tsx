import { useIndex } from '@/context';

import AllowedNote from '@/components/AllowedNote';

type FretProps = {
	note: number;
};

function Fret({ note }: FretProps) {
	const { notes, getNote, playNote, tonic } = useIndex();

	return (
		<div
			className='Fret w-full border-r border-black'
			title={getNote(note)}
			onClick={() => playNote(note)}
			onKeyDown={(e) => {
				if (e.key === 'Enter' || e.key === ' ') {
					e.preventDefault();
					playNote(note);
				}
			}}
			role='button'
			tabIndex={0}
		>
			{notes.includes(note) && <AllowedNote note={getNote(note)} isTonic={note === tonic} />}
		</div>
	);
}

export default Fret;
