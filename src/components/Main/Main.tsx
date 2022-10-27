import React from 'react';
import { Menu } from '../Menu';
import './main.sass';
import { Pages } from './Pages';

export function Main() {
  return (
    <div className="main">
      <Menu />
      <Pages />
    </div>
  );
}
