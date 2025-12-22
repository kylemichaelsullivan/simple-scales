import { useIndex } from '@/context';

import AllowedNote from '@/components/AllowedNote';

type KeyProps = {
	isBlack: boolean;
	note: number;
	isAllowed: boolean;
};

function Key({ isBlack, note, isAllowed }: KeyProps) {
	const { getNote, playNote, tonic } = useIndex();

	return (
		<div
			className={`Key border border-black ${isBlack ? 'black' : 'white'}`}
			title={getNote(note)}
			onClick={() => playNote(note)}
			onKeyDown={(e) => {
				if (e.key === 'Enter' || e.key === ' ') {
					e.preventDefault();
					playNote(note);
				}
			}}
			role='button'
			tabIndex={0}
		>
			{isAllowed && <AllowedNote note={getNote(note)} isTonic={note === tonic} isPiano={true} />}
		</div>
	);
}

export default Key;
