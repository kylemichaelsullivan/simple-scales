import { useIndex } from '../../context';

type NutProps = {
  note: number;
};

function Nut({ note }: NutProps) {
  const { notes, getNote, playNote } = useIndex();

  return (
    <div
      className={`Nut bg-black${notes.includes(note) ? ' allowed' : ''} w-8`}
      title={getNote(note)}
      onClick={() => playNote(note)}
    ></div>
  );
}

export default Nut;
