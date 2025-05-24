import Label from '../Label';
import FretNumbers from '../FretNumbers';
import String from '../String';

function Mandolin() {
	// G D A E
	const openNotes = [4, 9, 2, 7];

	return (
		<div className='Mandolin flex w-full justify-center'>
			<Label icon='/src/icons/mandolin.svg' />
			<div className='flex w-full flex-col'>
				<FretNumbers />

				<div className='fretboard border border-black'>
					{openNotes.map((note, i) => (
						<String openNote={note} key={`${note}-${i}`} />
					))}
				</div>
			</div>
		</div>
	);
}

export default Mandolin;
