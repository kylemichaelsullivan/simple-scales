import { useIndex } from '../context';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

function TransposeUp() {
  const { tonic, handleTonicChange } = useIndex();

  function transposeUp() {
    const transposed = (tonic + 7 + 12) % 12;
    handleTonicChange(transposed);
  }

  return (
    <button
      type='button'
      className='TransposeUp bg-slate-200 border border-slate-500 w-8 h-8 hover:ring-1'
      title='Up a Fifth'
      onClick={transposeUp}
    >
      <FontAwesomeIcon icon={faArrowUp} />
    </button>
  );
}

export default TransposeUp;
