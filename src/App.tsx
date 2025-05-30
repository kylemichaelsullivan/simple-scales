import ShowNotes from './components/buttons/ShowNotes';
import UsingFlats from './components/buttons/UsingFlats';
import Title from './components/Title';
import Scales from './components/scales/Scales';
import Notes from './components/Notes';
import DisplaysSelector from './components/displays/DisplaysSelector';
import Displays from './components/displays/Displays';

function App() {
	return (
		<div className='App relative flex min-h-screen flex-col gap-4 bg-sky-300 p-4'>
			<ShowNotes />
			<UsingFlats />
			<Title title='Simple Scales' />
			<Scales />
			<Notes />
			<DisplaysSelector />
			<Displays />
		</div>
	);
}

export default App;
