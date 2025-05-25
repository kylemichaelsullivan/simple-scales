import type { IconName } from '../Icon';
import Icon from '../Icon';

interface LabelProps {
	icon: IconName;
}

export default function Label({ icon }: LabelProps) {
	return (
		<div className='Label flex items-center gap-2'>
			<Icon name={icon} className='h-6 w-6' />
		</div>
	);
}
