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
  major: [1, 1, 0.5, 1, 1, 1],
  minor: [1, 0.5, 1, 1, 0.5, 1],
  pentatonic: [1, 1, 1.5, 1],
  ionian: [1, 1, 0.5, 1, 1, 1],
  dorian: [1, 0.5, 1, 1, 1, 0.5],
  phrygian: [0.5, 1, 1, 1, 0.5, 1],
  lydian: [1, 1, 1, 0.5, 1, 1],
  mixolydian: [1, 1, 0.5, 1, 1, 0.5],
  aeolian: [1, 0.5, 1, 1, 0.5, 1],
  locrian: [0.5, 1, 1, 0.5, 1, 1],
};

export const Frequencies: number[] = [
  261.63, 277.18, 293.66, 311.13, 329.63, 349.23, 369.99, 392.0, 415.3, 440.0,
  466.16, 493.88,
];

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
