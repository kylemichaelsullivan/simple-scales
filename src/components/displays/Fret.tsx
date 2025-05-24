import { useIndex } from '../../context';

import AllowedNote from '../AllowedNote';

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
		>
			{notes.includes(note) && (
				<AllowedNote note={getNote(note)} isTonic={note === tonic} />
			)}
		</div>
	);
}

export default Fret;
