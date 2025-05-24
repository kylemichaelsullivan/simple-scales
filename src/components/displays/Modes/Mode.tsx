import type { Scale_Modes, Scale_Variants } from '../../../types';

type ModeProps = {
	mode: Scale_Modes | Scale_Variants;
	background: 'bg-slate-200' | 'bg-slate-300';
	isCurrent: boolean;
	the_notes: string[];
};

function Mode({ mode, background, isCurrent, the_notes }: ModeProps) {
	const className = isCurrent ? 'font-semibold' : 'font-medium';

	return (
		<div className={`Mode grid-cols-17 grid ${background} capitalize`}>
			<div className={`${className} text-xxs col-span-3 sm:text-base`}>
				{mode}
			</div>
			{the_notes.map((note: string, i: number) => {
				return (
					<div
						className='text-xxs col-span-2 sm:text-base'
						key={`${note}-${i}`}
					>
						{note}
					</div>
				);
			})}
		</div>
	);
}

export default Mode;
