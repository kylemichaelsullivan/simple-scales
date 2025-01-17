import Label from '../Label';
import String from '../String';

function Ukelele() {
	const openNotes = [9, 4, 0, 7];

	return (
		<div className='Ukelele flex w-full justify-center'>
			<Label emoji='🏝️' />
			<div className='fretboard flex w-full flex-col border border-r-0 border-black'>
				{openNotes.map((note, i) => (
					<String openNote={note} key={`${note}-${i}`} />
				))}
			</div>
		</div>
	);
}

export default Ukelele;
