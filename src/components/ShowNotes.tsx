import { useIndex } from '../context';

function ShowNotes() {
	const { showNoteLabels, toggleShowNoteLabels } = useIndex();

	return (
		<button
			type='button'
			className='ShowNotes absolute left-0 top-0 h-12 w-12 border border-slate-500 bg-slate-200 text-xl hover:ring-1'
			title={showNoteLabels ? 'Hide Note Labels' : 'Show Note Labels'}
			onClick={toggleShowNoteLabels}
		>
			{showNoteLabels ? '📖' : '📕'}
		</button>
	);
}

export default ShowNotes;
