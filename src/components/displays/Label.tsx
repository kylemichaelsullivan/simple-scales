import { allDisplays } from '../../lookups/Displays';

import { Displays_Emoji } from '../../types';

type LabelProps = {
	emoji: Displays_Emoji;
};

function Label({ emoji }: LabelProps) {
	return (
		<div
			className='Label flex cursor-default items-center px-1 text-3xl'
			title={allDisplays[0][emoji]}
		>
			{emoji}
		</div>
	);
}

export default Label;
