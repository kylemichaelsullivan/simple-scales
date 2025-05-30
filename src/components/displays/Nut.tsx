import { useIndex } from '@/context';

import AllowedNote from '@/components/AllowedNote';

type NutProps = {
	note: number;
};

function Nut({ note }: NutProps) {
	const { notes, getNote, playNote, tonic } = useIndex();

	return (
		<div
			className='Nut w-8 bg-black'
			title={getNote(note)}
			onClick={() => playNote(note)}
		>
			{notes.includes(note) && (
				<AllowedNote note={getNote(note)} isTonic={note === tonic} />
			)}
		</div>
	);
}

export default Nut;
