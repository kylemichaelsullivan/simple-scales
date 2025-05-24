import { useIndex } from '../../context';
import { allDisplays } from '../../lookups/Displays';
import { Displays_Icon } from '../../types';
import Icon from '../Icon';

function DisplaysSelector() {
	const { displays, handleDisplaysClick } = useIndex();

	return (
		<div className='DisplaysSelector flex justify-center gap-8'>
			{Object.entries(allDisplays[0]).map(([icon, text]) => {
				const isActive = displays.includes(icon as Displays_Icon);

				return (
					<button
						type='button'
						className={`text-2xl ${!isActive ? 'inactive' : ''} hover:ring-1 sm:text-3xl`}
						title={text}
						onClick={() => handleDisplaysClick(icon as Displays_Icon)}
						key={icon}
					>
						<Icon icon={icon} />
					</button>
				);
			})}
		</div>
	);
}

export default DisplaysSelector;
