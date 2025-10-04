import { DisplayIcon } from '@/types';

import Icon, { type IconName } from '../Icon';

interface DisplaySelectorProps {
	icon: string;
	text: string;
	isActive: boolean;
	onClick: (icon: DisplayIcon) => void;
}

function DisplaySelector({ icon, text, isActive, onClick }: DisplaySelectorProps) {
	return (
		<button
			type='button'
			className={`DisplaySelector flex min-w-4 flex-col items-center justify-center rounded-lg transition-all sm:p-2 ${
				!isActive ? 'opacity-30 grayscale hover:opacity-50' : 'opacity-100 hover:brightness-110'
			}`}
			title={text}
			onClick={() => onClick(icon as DisplayIcon)}
		>
			<Icon name={icon as IconName} className='h-6 w-6 sm:h-8 sm:w-8' />
			<span className='text-xs font-bold sm:text-sm'>{text}</span>
		</button>
	);
}

export default DisplaySelector;
