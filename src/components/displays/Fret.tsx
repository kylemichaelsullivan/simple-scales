import { useIndex } from '../../context';

type FretProps = {
	note: number;
};

function Fret({ note }: FretProps) {
	const { notes, getNote, playNote } = useIndex();

	return (
		<div
			className={`Fret border-r border-black w-full${notes.includes(note) ? ' allowed' : ''}`}
			title={getNote(note)}
			onClick={() => playNote(note)}
		></div>
	);
}

export default Fret;
