import Label from '../Label';
import FretNumbers from '../FretNumbers';
import String from '../String';

function Ukelele() {
  // A E C G
  const openNotes = [9, 4, 0, 7];

  return (
    <div className="Ukelele flex w-full justify-center">
      <Label emoji="🏝️" />
      <div className="flex w-full flex-col">
        <FretNumbers />

        <div className="fretboard border border-black">
          {openNotes.map((note, i) => (
            <String openNote={note} key={`${note}-${i}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Ukelele;
