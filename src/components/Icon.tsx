import banjoIcon from '/icons/banjo.svg';
import guitarIcon from '/icons/guitar.svg';
import keyboardIcon from '/icons/keyboard.svg';
import mandolinIcon from '/icons/mandolin.svg';
import standIcon from '/icons/stand.svg';
import ukeleleIcon from '/icons/ukelele.svg';

const iconMap = {
	keyboard: keyboardIcon,
	guitar: guitarIcon,
	banjo: banjoIcon,
	ukelele: ukeleleIcon,
	mandolin: mandolinIcon,
	stand: standIcon,
} as const;

type IconName = keyof typeof iconMap;

interface IconProps {
	name: IconName;
	className?: string;
}

export default function Icon({ name, className = '' }: IconProps) {
	return <img src={iconMap[name]} alt={name} className={className} />;
}

export type { IconName };
