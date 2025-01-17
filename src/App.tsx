import UsingFlats from './components/UsingFlats';
import Title from './components/Title';
import Scales from './components/scales/Scales';
import Notes from './components/Notes';
import Displays from './components/displays/Displays';

function App() {
	return (
		<div className='App relative flex flex-col gap-4 bg-sky-300 p-4'>
			<UsingFlats />
			<Title title='Simple Scales' />
			<Scales />
			<Notes />
			<Displays />
		</div>
	);
}

export default App;
