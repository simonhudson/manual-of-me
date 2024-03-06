import { StyledIcon } from './index.styles';

export type IconProps = {
	name: string;
	className?: string;
};

export const Icon = ({ name, className }: IconProps) => {
	return <StyledIcon role="img" aria-hidden="true" className={`fa-solid fa-${name} ${className}`}></StyledIcon>;
};
