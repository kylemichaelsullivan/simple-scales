import { useIndex } from '../../context';
import { Scale_Variants } from '../../types';

function Variant() {
	const { variant, handleVariantChange, capitalizeFirstLetter } = useIndex();

	const variants: Scale_Variants[] = [
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
			className='Variant min-w-16 border border-slate-500 rounded-none px-1 hover:ring-1'
			value={variant}
			onChange={(e) => handleVariantChange(e.target.value as Scale_Variants)}
		>
			{variants.map((variantOption) => (
				<option key={variantOption} value={variantOption}>
					{capitalizeFirstLetter(variantOption)}
				</option>
			))}
		</select>
	);
}

export default Variant;
