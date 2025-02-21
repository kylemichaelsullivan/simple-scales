import FretNumbers from '../FretNumbers';
import Label from '../Label';
import String from '../String';

function Guitar() {
	// E B G D A E
	const openNotes = [4, 11, 7, 2, 9, 4];

	return (
		<div className='Guitar flex w-full justify-center'>
			<Label emoji='🎸' />
			<div className='fretboard flex w-full flex-col'>
				<FretNumbers />

				{openNotes.map((note, i) => (
					<String openNote={note} key={`${note}-${i}`} />
				))}
			</div>
		</div>
	);
}

export default Guitar;
