import Label from '@/components/displays/Label';
import FretNumbers from '@/components/displays/FretNumbers';
import String from '@/components/displays/String';
import DroneString from './DroneString';

function Banjo() {
	// [G] D B G D
	const openNotes = [2, 11, 7, 2];

	return (
		<div className='Banjo flex w-full justify-center gap-2 sm:gap-4'>
			<Label icon='banjo' title='Banjo' />
			<div className='flex w-full flex-col'>
				<FretNumbers />
				<div className='fretboard flex w-full flex-col border border-b-0 border-black'>
					{openNotes.map((note, i) => (
						<String openNote={note} key={`${note}-${i}`} />
					))}
					<DroneString openNote={7} key={`${7}-${4}`} />
				</div>
			</div>
		</div>
	);
}

export default Banjo;
