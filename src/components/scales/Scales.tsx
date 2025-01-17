import Scale from './Scale';
import TransposeDown from '../TransposeDown';
import TransposeUp from '../TransposeUp';

function Scales() {
	return (
		<div className='Scales flex justify-between'>
			<TransposeDown />
			<Scale />
			<TransposeUp />
		</div>
	);
}

export default Scales;
