import {
  Aperture,
  Clapperboard,
  Lightbulb,
  Wand2,
  LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Aperture,
  Clapperboard,
  Lightbulb,
  Wand2,
};

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

export function Icon({ name, className = "", size = 24 }: IconProps) {
  const LucideIconComponent = iconMap[name];

  if (!LucideIconComponent) {
    return null;
  }

  return <LucideIconComponent className={className} size={size} />;
}
