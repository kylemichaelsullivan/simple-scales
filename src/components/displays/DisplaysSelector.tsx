import { useIndex } from '@/context';
import { allDisplays } from '@/lookups/Displays';

import DisplaySelector from './DisplaySelector';

import type { Displays_Icon } from '@/types';

function DisplaysSelector() {
	const { displays, handleDisplaysClick } = useIndex();

	return (
		<div className='DisplaysSelector relative border border-slate-500'>
			<div className='flex overflow-x-auto px-4 py-1'>
				<div className='mx-auto flex gap-8'>
					{Object.entries(allDisplays[0]).map(([icon, text]) => (
						<DisplaySelector
							key={icon}
							icon={icon}
							text={text}
							isActive={displays.includes(icon as Displays_Icon)}
							onClick={handleDisplaysClick}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default DisplaysSelector;
