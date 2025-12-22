import Notes from './Notes';
import Displays from './displays/Displays';
import DisplaysSelector from './displays/DisplaysSelector';
import Scales from './scales/Scales';

function Body() {
	return (
		<main className='Body flex flex-col gap-4 p-4'>
			<Scales />
			<Notes />
			<DisplaysSelector />
			<Displays />
		</main>
	);
}

export default Body;
