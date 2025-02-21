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
		<div className={`Mode grid grid-cols-17 ${background} capitalize`}>
			<div className={`${className} col-span-3 text-xxs sm:text-base`}>
				{mode}
			</div>
			{the_notes.map((note: string, i: number) => {
				return (
					<div
						className='col-span-2 text-xxs sm:text-base'
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
