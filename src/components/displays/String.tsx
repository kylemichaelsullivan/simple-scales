import Nut from './Nut';
import Fret from './Fret';

type StringProps = {
	openNote: number;
};

function String({ openNote }: StringProps) {
	const frets = 11;

	return (
		<div className={`String flex justify-evenly`}>
			<Nut note={openNote} />
			{Array.from({ length: frets }, (_, i) => (
				<Fret note={(openNote + 1 + i) % 12} key={`${openNote}-fret-${i}`} />
			))}
		</div>
	);
}

export default String;
