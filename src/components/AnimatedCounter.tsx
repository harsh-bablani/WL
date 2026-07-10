import { useEffect, useState } from 'react';

interface AnimatedCounterProps {
  endValue: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
}

export default function AnimatedCounter({
  endValue,
  prefix = '',
  suffix = '',
  decimals = 0,
  duration = 1200,
  className = ''
}: AnimatedCounterProps) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let animationFrame = 0;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setValue(endValue * easedProgress);

      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(animate);
      }
    };

    animationFrame = window.requestAnimationFrame(animate);

    return () => window.cancelAnimationFrame(animationFrame);
  }, [endValue, duration]);

  const formattedValue = value.toLocaleString('en-IN', {
    minimumFractionDigits: decimals > 0 ? decimals : 0,
    maximumFractionDigits: decimals > 0 ? decimals : 0
  });

  return <span className={className}>{prefix}{formattedValue}{suffix}</span>;
}
