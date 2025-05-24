import { allDisplays } from '../../lookups/Displays';
import { Displays_Icon } from '../../types';
import Icon from '../Icon';

type LabelProps = {
	icon: Displays_Icon;
};

function Label({ icon }: LabelProps) {
	return (
		<div
			className='Label flex cursor-default items-center px-1 text-3xl'
			title={allDisplays[0][icon]}
		>
			<Icon icon={icon} />
		</div>
	);
}

export default Label;
