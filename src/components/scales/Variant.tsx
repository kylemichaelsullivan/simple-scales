import { ScaleType } from '@/types';

import { useIndex } from '@/context';

function Variant() {
	const { variant, handleVariantChange, capitalizeFirstLetter } = useIndex();

	const variants: ScaleType[] = [
		'major',
		'minor',
		'pentatonic',
		'ionian',
		'dorian',
		'phrygian',
		'lydian',
		'mixolydian',
		'aeolian',
		'locrian',
	];

	return (
		<select
			className='Variant min-w-16 rounded-none border border-slate-500 px-1 hover:ring-1'
			value={variant}
			onChange={e => handleVariantChange(e.target.value as ScaleType)}
		>
			{variants.map(variantOption => (
				<option key={variantOption} value={variantOption}>
					{capitalizeFirstLetter(variantOption)}
				</option>
			))}
		</select>
	);
}

export default Variant;
