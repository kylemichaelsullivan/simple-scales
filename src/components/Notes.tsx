import { useEffect, useState } from 'react';

import { useIndex } from '../context';

import type { Scale_NoteCount } from '../types';

import { Intervals } from '../lookups/Notes';

function Notes() {
  const { variant, notes, getNote } = useIndex();

  const [noteCount, setNoteCount] = useState<Scale_NoteCount>(
    Intervals[variant].length + 1,
  );

  useEffect(() => {
    setNoteCount(Intervals[variant].length + 1);
  }, [variant]);

  return (
    <div className='Notes bg-slate-200 border border-slate-500 shadow-md text-center'>
      <div className={`grid grid-cols-${noteCount}`}>
        {Array.from({ length: noteCount }, (_, index) => (
          <div key={index + 1}>{index + 1}</div>
        ))}
      </div>

      <div className={`grid grid-cols-${noteCount}`}>
        {notes.map((note: number, i: number) => (
          <div key={`${note}-${i}`}>{getNote(note)}</div>
        ))}
      </div>
    </div>
  );
}

export default Notes;
