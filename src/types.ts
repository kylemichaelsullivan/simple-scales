export type Notes_Flats =
  | 'C'
  | 'D♭'
  | 'D'
  | 'E♭'
  | 'E'
  | 'F'
  | 'G♭'
  | 'G'
  | 'A♭'
  | 'A'
  | 'B♭'
  | 'B';

export type Notes_Sharps =
  | 'C'
  | 'C♯'
  | 'D'
  | 'D♯'
  | 'E'
  | 'F'
  | 'F♯'
  | 'G'
  | 'G♯'
  | 'A'
  | 'A♯'
  | 'B';

export type Scale_Tonics = number;

export type Scale_Variants = 'major' | 'minor' | 'pentatonic';

export type Scale_UsingFlats = boolean;

export type Scale_NoteCount = number;
