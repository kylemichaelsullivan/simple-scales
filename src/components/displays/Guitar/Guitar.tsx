import Label from '@/components/displays/Label';
import FretNumbers from '@/components/displays/FretNumbers';
import String from '@/components/displays/String';

function Guitar() {
	// E A D G B E
	const openNotes = [4, 11, 7, 2, 9, 4];

	return (
		<div className='Guitar flex w-full justify-center gap-2 sm:gap-4'>
			<Label icon='guitar' title='Guitar' />
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
