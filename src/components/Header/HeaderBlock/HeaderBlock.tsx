import React from 'react';
import './headerblock.sass';

interface IHeaderBlockProps {
  imageSrc: React.ReactElement;
  text: string;
}

export function HeaderBlock({imageSrc, text} : IHeaderBlockProps) {
  return (
    <div className='header-block'>
      {imageSrc}
      <span>
        {text}
      </span>
    </div>
  );
}
