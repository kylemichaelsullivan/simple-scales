import type { Scale_Modes, Scale_Variants } from '../../../types';

type ModeProps = {
	tonicNote: string;
	mode: Scale_Modes | Scale_Variants;
	background: 'bg-slate-200' | 'bg-slate-300';
	isCurrent: boolean;
	the_notes: string[];
};

function Mode({
	tonicNote,
	mode,
	background,
	isCurrent,
	the_notes,
}: ModeProps) {
	const className = isCurrent ? 'font-semibold' : 'font-medium';

	return (
		<div className={`Mode grid grid-cols-8 ${background} capitalize`}>
			<div className={className}>{`${tonicNote} ${mode}`}</div>
			{the_notes.map((note: string, i: number) => {
				return <div key={`${note}-${i}`}>{note}</div>;
			})}
		</div>
	);
}

export default Mode;
