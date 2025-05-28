export type SpacerSize = "xs" | "sm" | "md" | "lg" | "xl";

const sizeMap: Record<SpacerSize, string> = {
  xs: "h-2",
  sm: "h-4",
  md: "h-8",
  lg: "h-12",
  xl: "h-16",
};

interface SpacerProps {
  size?: SpacerSize;
}

export function Spacer({ size = "md" }: SpacerProps) {
  return <div className={sizeMap[size]} aria-hidden="true" />;
}

export default Spacer;
