import { useIndex } from '../../../context';
import AllowedNote from '../../AllowedNote';

type KeyProps = {
  isBlack: boolean;
  note: number;
  isAllowed: boolean;
};

function Key({ isBlack, note, isAllowed }: KeyProps) {
  const { getNote, playNote, tonic } = useIndex();

  return (
    <div
      className={`Key border border-black ${isBlack ? 'black' : 'white'}`}
      title={getNote(note)}
      onClick={() => playNote(note)}
    >
      {isAllowed && (
        <AllowedNote note={getNote(note)} isTonic={note === tonic} />
      )}
    </div>
  );
}

export default Key;
