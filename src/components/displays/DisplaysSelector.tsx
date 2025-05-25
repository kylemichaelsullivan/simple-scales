import { useIndex } from '../../context';
import { allDisplays } from '../../lookups/Displays';
import { Displays_Icon } from '../../types';
import Icon, { type IconName } from '../Icon';

function DisplaysSelector() {
	const { displays, handleDisplaysClick } = useIndex();

	return (
		<div className='DisplaysSelector flex justify-center gap-8'>
			{Object.entries(allDisplays[0]).map(([icon, text]) => {
				const isActive = displays.includes(icon as Displays_Icon);

				return (
					<button
						type='button'
						className={`flex items-center justify-center rounded-lg p-2 transition-all ${
							!isActive
								? 'opacity-30 grayscale hover:opacity-50'
								: 'opacity-100 hover:brightness-110'
						}`}
						title={text}
						onClick={() => handleDisplaysClick(icon as Displays_Icon)}
						key={icon}
					>
						<Icon name={icon as IconName} className='h-8 w-8' />
					</button>
				);
			})}
		</div>
	);
}

export default DisplaysSelector;
