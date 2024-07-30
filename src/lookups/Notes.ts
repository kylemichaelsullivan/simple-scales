import type { Notes_Flats, Notes_Sharps } from './../types';

export const Flats: Notes_Flats[] = [
  'C',
  'D♭',
  'D',
  'E♭',
  'E',
  'F',
  'G♭',
  'G',
  'A♭',
  'A',
  'B♭',
  'B',
];

export const Sharps: Notes_Sharps[] = [
  'C',
  'C♯',
  'D',
  'D♯',
  'E',
  'F',
  'F♯',
  'G',
  'G♯',
  'A',
  'A♯',
  'B',
];

export const Intervals = {
  major: [1, 1, 0.5, 1, 1, 1, 0.5],
  minor: [1, 0.5, 1, 1, 0.5, 1, 1],
  pentatonic: [1, 1, 1.5, 1, 1, 1.5],
};

/*
 *  0: C
 *  1: C♯/D♭
 *  2: D
 *  3: D♯/E♭
 *  4: E
 *  5: F
 *  6: F♯/G♭
 *  7: G
 *  8: G♯/A♭
 *  9: A
 * 10: A♯/B♭
 * 11: B
 */
