import React from 'react';
import './menuitem.sass';

interface IMenuItem {
  icon: React.ReactElement;
  name: string;
  items?: IMenuItem
}

export function MenuItem({ icon, name, items}: IMenuItem) {
  return (
    <>
      {icon}
      <span>
        {name}
      </span>
    </>
  );
}
