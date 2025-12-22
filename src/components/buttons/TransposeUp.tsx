import { useIndex } from '@/context';

import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function TransposeUp() {
	const { tonic, handleTonicChange } = useIndex();

	function transposeUp() {
		const transposed = (tonic + 7 + 12) % 12;
		handleTonicChange(transposed);
	}

	return (
		<button
			type='button'
			className='TransposeUp h-8 w-8 border border-slate-500 bg-slate-200 hover:ring-1'
			title='Up a Fifth'
			onClick={transposeUp}
		>
			<FontAwesomeIcon icon={faArrowUp} />
		</button>
	);
}

export default TransposeUp;
