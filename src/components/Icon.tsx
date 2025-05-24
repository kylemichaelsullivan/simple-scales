import { type ReactNode } from 'react';

type IconProps = {
	icon: string;
	className?: string;
};

function Icon({ icon = '', className = '' }: IconProps): ReactNode {
	if (!icon) {
		return null;
	}

	if (icon.startsWith('/src/icons/')) {
		return (
			<img src={icon} alt='' className={`inline-block h-6 w-6 ${className}`} />
		);
	}
	return <span className={className}>{icon}</span>;
}

export default Icon;
