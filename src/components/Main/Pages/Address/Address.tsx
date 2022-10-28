import React, { useState } from 'react';
import './address.sass';

export function Address() {
  const [value, setValue] = useState('');
  return (
    <div className='page'>
      <h2 className="page__title">
        Поиск адресов
      </h2>
      <p className="page__descr">
        Введите интересующий вас адрес
      </p>

      <form action="">
        
        <input 
          type='text' 
          value={value} 
          placeholder='Введите интересующий вас адрес'
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
      
    </div>
  );
}
