import { type LucideIcon } from 'lucide-react';

interface IconProps {
    className?: string;
    iconNode?: LucideIcon | null;
}

export function Icon({ className, iconNode: IconComponent }: IconProps) {
    if (!IconComponent) {
        return null;
    }

    return <IconComponent className={className} />;
}
