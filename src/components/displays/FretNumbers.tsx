function FretNumbers() {
	const dottedFretIndexes = [0, 2, 4, 6, 8];

	return (
		<div className='FretNumbers flex w-full justify-evenly bg-sky-300'>
			{Array.from({ length: 11 }, (_, index) => (
				<div
					className={`${dottedFretIndexes.includes(index) ? 'text-black' : 'text-gray-400'} w-full text-center text-xs sm:text-base`}
					key={index}
				>
					{index + 1}
				</div>
			))}
		</div>
	);
}

export default FretNumbers;
