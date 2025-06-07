import { useIndex } from '@/context';

function Tonic() {
	const { tonic, handleTonicChange, getNote } = useIndex();

	return (
		<select
			className='Tonic min-w-14 rounded-none border border-slate-500 px-1 hover:ring-1'
			value={tonic}
			onChange={(e) => handleTonicChange(+e.target.value)}
		>
			{Array.from({ length: 12 }, (_, index) => {
				const tonicOption = getNote(index);
				return (
					<option key={tonicOption} value={index}>
						{tonicOption}
					</option>
				);
			})}
		</select>
	);
}

export default Tonic;
