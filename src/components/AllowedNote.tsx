import { useIndex } from '../context';

type AllowedNoteProps = {
  note: string;
  isTonic: boolean;
};

function AllowedNote({ note, isTonic }: AllowedNoteProps) {
  const { showNoteLabels } = useIndex();
  const size = isTonic ? 'w-6 h-6' : 'w-4 h-4';
  const fontSize = isTonic ? 'text-xxs' : 'text-xxxs';
  const hasFlat = note.includes('♭');
  const hasSharp = note.includes('♯');

  return (
    <span
      className={`AllowedNote absolute flex items-center justify-center bg-green-700 rounded-full text-white font-bold text-center leading-none ${size} ${fontSize} bottom-1 left-1/2 translate-x-[-50%] ${hasFlat ? 'hasFlat' : ''} ${hasSharp ? 'hasSharp' : ''}`}
      title={note}
    >
      {showNoteLabels ? note : ''}
    </span>
  );
}

export default AllowedNote;
