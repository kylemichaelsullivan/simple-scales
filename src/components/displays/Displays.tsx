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
			{displays.includes('keyboard') && <Piano />}
			{displays.includes('guitar') && <Guitar />}
			{displays.includes('banjo') && <Banjo />}
			{displays.includes('ukelele') && <Ukelele />}
			{displays.includes('mandolin') && <Mandolin />}
			{displays.includes('stand') && variant !== 'pentatonic' && <Modes />}
		</div>
	);
}

export default Displays;
