import { useMemo } from 'react';

import type { Scale_Modes, Scale_Variants } from '@/types';

type ModeProps = {
	mode: Scale_Modes | Scale_Variants;
	background: 'bg-slate-200' | 'bg-slate-300';
	isCurrent: boolean;
	the_notes: string[];
};

const Mode = ({ mode, background, isCurrent, the_notes }: ModeProps) => {
	const className = useMemo(
		() => (isCurrent ? 'font-semibold' : 'font-medium'),
		[isCurrent],
	);

	const noteElements = useMemo(
		() =>
			the_notes.map((note: string, i: number) => (
				<div className='text-xxs col-span-2 sm:text-base' key={`${note}-${i}`}>
					{note}
				</div>
			)),
		[the_notes],
	);

	return (
		<div className={`Mode grid-cols-17 grid ${background} capitalize`}>
			<div className={`${className} text-xxs col-span-3 sm:text-base`}>
				{mode}
			</div>
			{noteElements}
		</div>
	);
};

export default Mode;
