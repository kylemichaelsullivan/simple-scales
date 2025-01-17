import Label from '../Label';
import String from '../String';
import DroneString from './DroneString';

function Banjo() {
	const openNotes = [2, 11, 7, 2];

	return (
		<div className='Banjo flex w-full justify-center'>
			<Label emoji='🪕' />
			<div className='fretboard flex w-full flex-col border border-b-0 border-l-0 border-r-0 border-black'>
				{openNotes.map((note, i) => (
					<String openNote={note} key={`${note}-${i}`} />
				))}
				<DroneString openNote={7} key={`${7}-${4}`} />
			</div>
		</div>
	);
}

export default Banjo;
