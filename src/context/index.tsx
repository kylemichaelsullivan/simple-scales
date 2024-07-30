import {
  useState,
  useEffect,
  createContext,
  useContext,
  type ReactNode,
} from 'react';

import type { Scale_Tonics, Scale_Variants, Scale_UsingFlats } from '../types';

import { Flats, Sharps, Intervals } from '../lookups/Notes';

type IndexContextType = {
  tonic: Scale_Tonics;
  variant: Scale_Variants;
  usingFlats: Scale_UsingFlats;
  notes: number[];
  // handleTonicChange: (tonic: number) => void;
  // handleVariantChange: (variant: string) => void;
  handleTonicChange: any;
  handleVariantChange: any;
  toggleUsingFlats: () => void;
  getNote: (note: number) => string;
  makeScale: (tonic: Scale_Tonics, variant: Scale_Variants) => void;
  reset: () => void;
};

const IndexContext = createContext<IndexContextType | undefined>(undefined);

type IndexContextProviderProps = {
  children: ReactNode;
};

const initialTonic: Scale_Tonics = 0;
const initialVariant: Scale_Variants = 'major';
const initialUsingFlats: Scale_UsingFlats = true;

export const IndexContextProvider = ({
  children,
}: IndexContextProviderProps) => {
  const [tonic, setTonic] = useState<Scale_Tonics>(initialTonic);
  const [variant, setVariant] = useState<Scale_Variants>(initialVariant);
  const [usingFlats, setUsingFlats] =
    useState<Scale_UsingFlats>(initialUsingFlats);
  const [notes, setNotes] = useState<Scale_Tonics[]>([tonic]);

  function handleTonicChange(tonic: Scale_Tonics) {
    setTonic(tonic);
  }

  function handleVariantChange(variant: Scale_Variants) {
    setVariant(variant);
  }

  function toggleUsingFlats() {
    setUsingFlats(!usingFlats);
  }

  function getNote(note: number) {
    const scale = usingFlats ? Flats : Sharps;
    return scale[note];
  }

  function makeScale(tonic: Scale_Tonics, variant: Scale_Variants) {
    const scaleNotes: Scale_Tonics[] = [tonic];
    const intervals = Intervals[variant];
    let currentNote = tonic;

    intervals.map((interval) => {
      currentNote = (currentNote + interval * 2) % 12;
      scaleNotes.push(currentNote);
    });

    setNotes(scaleNotes);
  }

  function reset() {
    setTonic(initialTonic);
    setVariant(initialVariant);
  }

  useEffect(() => {
    makeScale(tonic, variant);
  }, [tonic, variant]);

  useEffect(() => {
    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        reset();
      }
    };

    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return (
    <IndexContext.Provider
      value={{
        tonic,
        variant,
        usingFlats,
        notes,
        handleTonicChange,
        handleVariantChange,
        toggleUsingFlats,
        getNote,
        makeScale,
        reset,
      }}
    >
      {children}
    </IndexContext.Provider>
  );
};

export const useIndex = (): IndexContextType => {
  const context = useContext(IndexContext);
  if (!context) {
    throw new Error('useIndex must be used within a <IndexProvider />');
  }
  return context;
};
