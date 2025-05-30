import { useIndex } from '../../context';

function UsingFlats() {
	const { usingFlats, toggleUsingFlats } = useIndex();

	return (
		<button
			type='button'
			className='UsingFlats absolute right-0 top-0 h-12 w-12 border border-slate-500 bg-slate-200 text-xl hover:ring-1'
			title={usingFlats ? 'Switch to Sharps' : 'Switch to Flats'}
			onClick={toggleUsingFlats}
		>
			{usingFlats ? '♭' : '♯'}
		</button>
	);
}

export default UsingFlats;
