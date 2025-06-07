import { useIndex } from '@/context';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

function TransposeDown() {
	const { tonic, handleTonicChange } = useIndex();

	function transposeDown() {
		const transposed = (tonic - 7 + 12) % 12;
		handleTonicChange(transposed);
	}

	return (
		<button
			type='button'
			className='TransposeDown h-8 w-8 border border-slate-500 bg-slate-200 hover:ring-1'
			title='Down a Fifth'
			onClick={transposeDown}
		>
			<FontAwesomeIcon icon={faArrowDown} />
		</button>
	);
}

export default TransposeDown;
