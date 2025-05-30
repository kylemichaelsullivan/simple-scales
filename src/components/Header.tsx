import ShowNotes from './buttons/ShowNotes';
import UsingFlats from './buttons/UsingFlats';
import Title from './Title';

function Header() {
	return (
		<header className='Header relative flex h-12 items-center justify-center'>
			<ShowNotes />
			<UsingFlats />
			<Title title='Simple Scales' />
		</header>
	);
}

export default Header;
