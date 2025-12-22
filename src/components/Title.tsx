type TitleProps = {
	title: string;
};

function Title({ title }: TitleProps) {
	return <h1 className='Title text-center text-2xl font-bold sm:text-4xl md:text-5xl'>{title}</h1>;
}

export default Title;
