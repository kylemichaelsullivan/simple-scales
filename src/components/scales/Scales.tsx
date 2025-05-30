import Scale from './Scale';
import TransposeDown from '@/components/buttons/TransposeDown';
import TransposeUp from '@/components/buttons/TransposeUp';

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
