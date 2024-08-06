import { useIndex } from '../../../context';

import Key from './Key';

function Piano() {
  const keys = 12;
  const blackKeys = [1, 3, 6, 8, 10];

  const { notes } = useIndex();

  return (
    <div className={`Piano relative flex justify-center w-full min-h-24`}>
      {Array.from({ length: keys }, (_, note) => (
        <Key
          isBlack={blackKeys.includes(note)}
          note={note}
          isAllowed={notes.includes(note)}
          key={note}
        />
      ))}
    </div>
  );
}

export default Piano;
