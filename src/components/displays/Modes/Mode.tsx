import { useMemo } from 'react';

import type { ScaleMode, ScaleType } from '@/types';

type ModeProps = {
	mode: ScaleMode | ScaleType;
	background: 'bg-slate-200' | 'bg-slate-300';
	isCurrent: boolean;
	the_notes: string[];
	relativeMajor: string;
	relativeMinor: string;
};

const Mode = ({
	mode,
	background,
	isCurrent,
	the_notes,
	relativeMajor,
	relativeMinor,
}: ModeProps) => {
	const className = useMemo(() => (isCurrent ? 'font-bold' : 'font-normal'), [isCurrent]);

	const noteElements = useMemo(
		() =>
			the_notes.map((note: string, i: number) => (
				<div className='text-xxs col-span-2 sm:text-base' key={`${note}-${i}`}>
					{note}
				</div>
			)),
		[the_notes]
	);

	return (
		<div className={`Mode grid-cols-17 grid items-center ${background} capitalize`}>
			<div className={`${className} flex flex-col text-xxs col-span-3 sm:text-base`}>
				{mode}
				<span className='hidden text-gray-500 text-xxs leading-snug sm:block'>
					[{relativeMajor}, {relativeMinor}
					<span className='lowercase'>m</span>]
				</span>
			</div>
			{noteElements}
		</div>
	);
};

export default Mode;
