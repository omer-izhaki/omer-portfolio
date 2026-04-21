'use client';
import React from 'react';

interface SectionHeadingProps {
  number: string;
  title: string;
}

export default function SectionHeading({ number, title }: SectionHeadingProps) {
  return (
    <div className="flex items-center gap-4 mb-12">
      {/* Numbered prefix in accent mono */}
      <h2 className="flex items-center gap-3 text-2xl md:text-3xl font-semibold text-lightest-slate whitespace-nowrap">
        <span className="font-mono text-accent text-xl md:text-2xl">{number}.</span>
        {title}
      </h2>
      {/* Decorative horizontal rule */}
      <div className="flex-1 h-px bg-lightest-navy" />
    </div>
  );
}
