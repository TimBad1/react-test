import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Address } from './Address';
import { Home } from './Home';
import './pages.sass';

export function Pages() {
  return (
    <div className='pages'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/address' element={<Address />} />
      </Routes>
      <Pages />
    </div>
  );
}
