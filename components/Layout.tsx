import React, { ReactNode } from 'react';

export const Section = ({ 
  children, 
  id, 
  className = "",
  fullHeight = false
}: { 
  children?: ReactNode; 
  id?: string; 
  className?: string;
  fullHeight?: boolean;
}) => (
  <section 
    id={id} 
    className={`relative w-full border-b border-frolic-black ${fullHeight ? 'min-h-screen' : 'py-24'} ${className}`}
  >
    {children}
  </section>
);

export const Container = ({ children, className = "" }: { children?: ReactNode; className?: string }) => (
  <div className={`w-full max-w-[1920px] mx-auto px-4 sm:px-8 ${className}`}>
    {children}
  </div>
);

export const Grid = ({ children, className = "" }: { children?: ReactNode; className?: string }) => (
  <div className={`grid grid-cols-1 md:grid-cols-12 gap-y-8 md:gap-x-8 ${className}`}>
    {children}
  </div>
);

export const GridCol: React.FC<{ 
  children?: ReactNode; 
  span?: number; 
  className?: string;
}> = ({ 
  children, 
  span = 12, 
  className = "" 
}) => {
  const spans:Record<number, string> = {
    1: 'md:col-span-1',
    2: 'md:col-span-2',
    3: 'md:col-span-3',
    4: 'md:col-span-4',
    5: 'md:col-span-5',
    6: 'md:col-span-6',
    7: 'md:col-span-7',
    8: 'md:col-span-8',
    9: 'md:col-span-9',
    10: 'md:col-span-10',
    11: 'md:col-span-11',
    12: 'md:col-span-12',
  };

  return (
    <div className={`${spans[span] || 'md:col-span-12'} ${className}`}>
      {children}
    </div>
  );
};

export const SectionHeader = ({ number, title }: { number: string; title: string }) => (
  <div className="flex flex-col mb-12 md:mb-0 sticky top-24 self-start">
    <span className="text-sm font-bold tracking-widest mb-2 font-mono text-frolic-accent">{number}</span>
    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none break-keep">
      {title}
    </h2>
  </div>
);