interface GradientBoxProps {
  from: string;
  via: string;
  to: string;
}

export default function GradientBox({ from, via, to }: GradientBoxProps) {
  return (
    <div className={`w-full h-full bg-gradient-to-br from-${from} via-${via} to-${to} hover:scale-105 transition-transform duration-300`} />
  );
} 