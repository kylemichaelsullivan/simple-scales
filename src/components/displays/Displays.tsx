import { useIndex } from '../../context';

import Piano from './Piano/Piano';
import Guitar from './Guitar/Guitar';
import Ukelele from './Ukelele/Ukelele';
import Banjo from './Banjo/Banjo';
import DisplaysSelector from './DisplaysSelector';

function Displays() {
	const { displays } = useIndex();

	return (
		<div className='Displays mx-auto flex w-full max-w-screen-2xl flex-col gap-8'>
			<DisplaysSelector />
			{displays.includes('🎹') && <Piano />}
			{displays.includes('🎸') && <Guitar />}
			{displays.includes('🪕') && <Banjo />}
			{displays.includes('🏝️') && <Ukelele />}
		</div>
	);
}

export default Displays;
