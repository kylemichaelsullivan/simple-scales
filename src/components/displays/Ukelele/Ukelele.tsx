import FretNumbers from '@/components/displays/FretNumbers';
import FretString from '@/components/displays/FretString';
import Label from '@/components/displays/Label';

function Ukelele() {
	// G C E A
	const openNotes = [9, 4, 0, 7];

	return (
		<div className='Ukelele flex w-full justify-center gap-2 sm:gap-4'>
			<Label icon='ukelele' title='Ukelele' />
			<div className='flex w-full flex-col'>
				<FretNumbers />

				<div className='fretboard border border-black'>
					{openNotes.map((note, i) => (
						<FretString openNote={note} key={`ukelele-string-${note}-${i}`} />
					))}
				</div>
			</div>
		</div>
	);
}

export default Ukelele;
