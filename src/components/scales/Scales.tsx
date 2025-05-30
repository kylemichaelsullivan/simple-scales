import Scale from './Scale';
import TransposeDown from '../buttons/TransposeDown';
import TransposeUp from '../buttons/TransposeUp';

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
