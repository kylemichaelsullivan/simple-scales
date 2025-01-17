type TitleProps = {
	title: string;
};

function Title({ title }: TitleProps) {
	return (
		<h1 className='Title text-center text-3xl font-bold sm:text-5xl'>
			{title}
		</h1>
	);
}

export default Title;
