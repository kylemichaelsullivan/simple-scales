import { useIndex } from '../../../context';

type KeyProps = {
  isBlack: boolean;
  note: number;
  isAllowed: boolean;
};

function Key({ isBlack, note, isAllowed }: KeyProps) {
  const { getNote, playNote } = useIndex();

  return (
    <div
      className={`Key border border-black ${isBlack ? 'black' : 'white'}${isAllowed ? ' allowed' : ''}`}
      title={getNote(note)}
      onClick={() => playNote(note)}
    />
  );
}

export default Key;
