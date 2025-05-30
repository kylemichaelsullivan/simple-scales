import Nut from '@/components/displays/Nut';
import Fret from '@/components/displays/Fret';
import SkippedFret from './SkippedFret';

type DroneStringProps = {
	openNote: number;
};

function DroneString({ openNote }: DroneStringProps) {
	const frets = 6;

	return (
		<div className={`DroneString ml-1 flex justify-evenly`}>
			{Array.from({ length: 5 }, (_, i) => (
				<SkippedFret key={i} />
			))}

			<Nut note={openNote} />

			{Array.from({ length: frets }, (_, i) => (
				<Fret note={(openNote + 1 + i) % 12} key={`${openNote}-fret-${i}`} />
			))}
		</div>
	);
}

export default DroneString;
