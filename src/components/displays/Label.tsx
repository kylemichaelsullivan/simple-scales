import type { IconName } from '../Icon';
import Icon from '../Icon';

interface LabelProps {
	icon: IconName;
	title: string;
}

export default function Label({ icon, title }: LabelProps) {
	return (
		<div
			className='Label flex flex-col items-center justify-center gap-2'
			title={title}
		>
			<Icon name={icon} className='h-6 w-6' />
			<span className='text-sm font-bold'>{title}</span>
		</div>
	);
}
