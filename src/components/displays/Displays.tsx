import { useIndex } from '../../context';

import DisplaysSelector from './DisplaysSelector';

import Piano from './Piano/Piano';
import Guitar from './Guitar/Guitar';
import Banjo from './Banjo/Banjo';
import Ukelele from './Ukelele/Ukelele';
import Mandolin from './Mandolin/Mandolin';
import Modes from './Modes/Modes';

function Displays() {
	const { displays, variant } = useIndex();

	return (
		<div className='Displays mx-auto flex w-full max-w-screen-2xl flex-col gap-8'>
			<DisplaysSelector />
			{displays.includes('/src/icons/keyboard.svg') && <Piano />}
			{displays.includes('/src/icons/guitar.svg') && <Guitar />}
			{displays.includes('/src/icons/banjo.svg') && <Banjo />}
			{displays.includes('/src/icons/ukelele.svg') && <Ukelele />}
			{displays.includes('/src/icons/mandolin.svg') && <Mandolin />}
			{displays.includes('/src/icons/stand.svg') &&
				variant !== 'pentatonic' && <Modes />}
		</div>
	);
}

export default Displays;
