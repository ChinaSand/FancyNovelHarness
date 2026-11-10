import React from 'react';

interface YinzhangStampProps {
  text: string;
  variant?: 'vermilion' | 'amber' | 'teal' | 'ink';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

export const YinzhangStamp: React.FC<YinzhangStampProps> = ({
  text,
  variant = 'vermilion',
  size = 'md',
  className = '',
  onClick,
}) => {
  const colorStyles = {
    vermilion: 'border-[#e11d48] text-[#e11d48] bg-[#e11d48]/10 hover:bg-[#e11d48]/15 shadow-[0_0_12px_-2px_rgba(225,29,72,0.25)]',
    amber: 'border-[#d97706] text-[#d97706] bg-[#d97706]/10 hover:bg-[#d97706]/15 shadow-[0_0_12px_-2px_rgba(217,119,6,0.25)]',
    teal: 'border-[#0d9488] text-[#0d9488] bg-[#0d9488]/10 hover:bg-[#0d9488]/15 shadow-[0_0_12px_-2px_rgba(13,148,136,0.25)]',
    ink: 'border-[#131b2e] text-[#131b2e] bg-[#131b2e]/10 hover:bg-[#131b2e]/15 shadow-[0_0_12px_-2px_rgba(19,27,46,0.15)]',
  };

  const sizeStyles = {
    sm: 'text-xs px-2 py-0.5 rounded-sm border-[1.5px]',
    md: 'text-sm px-2.5 py-1 rounded border-[2px]',
    lg: 'text-base px-3.5 py-1.5 rounded-md border-[2.5px]',
  };

  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center justify-center font-calligraphy tracking-widest uppercase transition-all select-none ${
        onClick ? 'cursor-pointer hover:scale-105 active:scale-95' : ''
      } ${colorStyles[variant]} ${sizeStyles[size]} ${className}`}
      style={{
        textShadow: '0 0 1px currentColor',
        boxShadow: 'inset 0 0 4px rgba(0,0,0,0.05)',
      }}
      title={text}
    >
      <span className="relative z-10 px-0.5 leading-tight">{text}</span>
      {/* Decorative corner nicks reminiscent of carved stone seal */}
      <span className="absolute -top-0.5 -left-0.5 w-1 h-1 bg-current opacity-40 rounded-full" />
      <span className="absolute -bottom-0.5 -right-0.5 w-1 h-1 bg-current opacity-40 rounded-full" />
    </div>
  );
};
