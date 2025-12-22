import FretNumbers from '@/components/displays/FretNumbers';
import FretString from '@/components/displays/FretString';
import Label from '@/components/displays/Label';

function Mandolin() {
	// G D A E
	const openNotes = [4, 9, 2, 7];

	return (
		<div className='Mandolin flex w-full justify-center gap-2 sm:gap-4'>
			<Label icon='mandolin' title='Mandolin' />
			<div className='flex w-full flex-col'>
				<FretNumbers />

				<div className='fretboard border border-black'>
					{openNotes.map((note, i) => (
						<FretString openNote={note} key={`mandolin-string-${note}-${i}`} />
					))}
				</div>
			</div>
		</div>
	);
}

export default Mandolin;
