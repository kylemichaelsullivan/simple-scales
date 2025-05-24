import { useIndex } from '../../context';

import AllowedNote from '../AllowedNote';

type NutProps = {
  note: number;
};

function Nut({ note }: NutProps) {
  const { notes, getNote, playNote, tonic } = useIndex();

  return (
    <div
      className="Nut bg-black w-8"
      title={getNote(note)}
      onClick={() => playNote(note)}
    >
      {notes.includes(note) && (
        <AllowedNote note={getNote(note)} isTonic={note === tonic} />
      )}
    </div>
  );
}

export default Nut;
