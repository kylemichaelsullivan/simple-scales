import Nut from '../Nut';
import Fret from '../Fret';

type DroneStringProps = {
  openNote: number;
};

function DroneString({ openNote }: DroneStringProps) {
  const frets = 6;

  return (
    <div className={`DroneString flex justify-evenly ml-auto`}>
      <Nut note={openNote} />
      {Array.from({ length: frets }, (_, i) => (
        <Fret note={(openNote + 1 + i) % 12} key={`${openNote}-fret-${i}`} />
      ))}
    </div>
  );
}

export default DroneString;
