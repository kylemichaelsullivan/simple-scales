import Label from '../Label';
import FretNumbers from '../FretNumbers';
import String from '../String';

function Guitar() {
	// E B G D A E
	const openNotes = [4, 11, 7, 2, 9, 4];

	return (
		<div className='Guitar flex w-full justify-center'>
			<Label icon='guitar' />
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

export default Guitar;
