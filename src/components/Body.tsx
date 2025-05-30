import Scales from './scales/Scales';
import Notes from './Notes';
import DisplaysSelector from './displays/DisplaysSelector';
import Displays from './displays/Displays';

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
