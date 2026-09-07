import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';

type RevealDirection = 'up' | 'left' | 'right' | 'scale';

interface RevealProps {
  children: ReactNode;
  direction?: RevealDirection;
  delay?: number;
  duration?: number;
  className?: string;
}

type RevealStyle = CSSProperties & {
  '--reveal-delay': string;
  '--reveal-duration': string;
};

export function Reveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 650,
  className = '',
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(
    () => typeof window === 'undefined' || !('IntersectionObserver' in window),
  );

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (!('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const style: RevealStyle = {
    '--reveal-delay': `${Math.max(0, delay)}ms`,
    '--reveal-duration': `${Math.max(0, duration)}ms`,
  };

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      data-reveal-direction={direction}
      style={style}
    >
      {children}
    </div>
  );
}
