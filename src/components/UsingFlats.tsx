import { useIndex } from '../context';

function UsingFlats() {
  const { usingFlats, toggleUsingFlats } = useIndex();

  return (
    <button
      type='button'
      className='UsingFlats absolute border text-xl w-12 h-12 top-0 right-0 hover:ring-1'
      title={usingFlats ? 'Switch to Sharps' : 'Switch to Flats'}
      onClick={toggleUsingFlats}
    >
      {usingFlats ? '♭' : '♯'}
    </button>
  );
}

export default UsingFlats;
