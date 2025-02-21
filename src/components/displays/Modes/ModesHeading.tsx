function ModesHeading() {
	return (
		<div className='ModesHeading grid grid-cols-8 bg-slate-400 font-semibold'>
			<div></div>
			{Array.from({ length: 7 }, (_, index) => {
				const romanNumerals = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII'];
				return (
					<div className='roman-numeral' key={romanNumerals[index]}>
						{romanNumerals[index]}
					</div>
				);
			})}
		</div>
	);
}

export default ModesHeading;
