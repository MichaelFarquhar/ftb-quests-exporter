import { Info, CircleAlert, TriangleAlert, CircleCheck } from "lucide-react";

type AlertVariant = "info" | "error" | "warning" | "success";

interface Props {
  text: string;
  variant: AlertVariant;
  isVisible?: boolean;
}

// Each variant displays a different icon from lucide-react
const variantIcons = {
  info: Info,
  error: CircleAlert,
  warning: TriangleAlert,
  success: CircleCheck,
};

export const Alert = ({ isVisible = true, text, variant }: Props) => {
  // Get the icon for the variant
  const Icon = variantIcons[variant];

  return (
    isVisible && (
      <div className="w-fit flex items-center space-x-3 border-l-3 border-slate-300 py-2.5 px-3 bg-black/15 text-sm text-slate-300">
        <Icon className="w-5 h-5 outline-slate-300" />
        <div>{text}</div>
      </div>
    )
  );
};
