import { useIndex } from '../../context';
import { allDisplays } from '../../lookups/Displays';
import { Displays_Icon } from '../../types';
import DisplaySelector from './DisplaySelector';

function DisplaysSelector() {
	const { displays, handleDisplaysClick } = useIndex();

	return (
		<div className='DisplaysSelector flex justify-center gap-8 overflow-x-auto border border-slate-500 px-2 py-1'>
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
	);
}

export default DisplaysSelector;
