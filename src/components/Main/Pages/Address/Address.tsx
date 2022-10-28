import React, { ChangeEvent, SyntheticEvent, useEffect, useState } from 'react';
import { getAddress } from '../../../../services/api';
import './address.sass';

type TData = {
  data: any,
  unrestricted_value: string,
  value: string
}

export function Address() {
  const [value, setValue] = useState('');
  const [data, setData] = useState<TData[] | undefined>(undefined)

  useEffect(() => {
      if (value.length >= 3) {
          getAddress(value)
              .then((res: any) => {
                  setData(res.suggestions);
              })
      }
  }, [value])
  
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
}

const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
}

const onClick = (str: string) => {
    setValue(str);
}

  return (
    <div className="page">
      <h2 className="page__title">
        Поиск адресов
      </h2>
      <p className="page__descr">
        Введите интересующий вас адрес
      </p>

      <form className='page__form' onSubmit={handleSubmit}>
        <label className='page__label'>
          <input 
            onChange={onChange}
            className='page__input'
            type='text' 
            value={value} 
            placeholder='Введите интересующий вас адрес'
          />
        </label>
        
        <button className="page__button" type='submit'>
          <svg className="page__search-icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M31.9039 29.6999L21.5159 19.3119C23.1279 17.2279 23.9999 14.6799 23.9999 11.9999C23.9999 8.79196 22.7479 5.78397 20.4839 3.51598C18.2199 1.24799 15.2039 0 11.9999 0C8.79596 0 5.77997 1.25199 3.51598 3.51598C1.24799 5.77997 0 8.79196 0 11.9999C0 15.2039 1.25199 18.2199 3.51598 20.4839C5.77997 22.7519 8.79196 23.9999 11.9999 23.9999C14.6799 23.9999 17.2239 23.1279 19.3079 21.5199L29.6959 31.9039C29.7263 31.9343 29.7625 31.9585 29.8023 31.975C29.8421 31.9915 29.8848 32 29.9279 32C29.971 32 30.0136 31.9915 30.0534 31.975C30.0932 31.9585 30.1294 31.9343 30.1599 31.9039L31.9039 30.1639C31.9343 30.1334 31.9585 30.0972 31.975 30.0574C31.9915 30.0176 32 29.975 32 29.9319C32 29.8888 31.9915 29.8461 31.975 29.8063C31.9585 29.7665 31.9343 29.7303 31.9039 29.6999ZM18.3359 18.3359C16.6399 20.0279 14.3919 20.9599 11.9999 20.9599C9.60796 20.9599 7.35997 20.0279 5.66398 18.3359C3.97198 16.6399 3.03999 14.3919 3.03999 11.9999C3.03999 9.60796 3.97198 7.35597 5.66398 5.66398C7.35997 3.97198 9.60796 3.03999 11.9999 3.03999C14.3919 3.03999 16.6439 3.96798 18.3359 5.66398C20.0279 7.35997 20.9599 9.60796 20.9599 11.9999C20.9599 14.3919 20.0279 16.6439 18.3359 18.3359Z" fill="#fff"/>
          </svg>
          Поиск
        </button>
      </form>
      {data && 
        <div className='address'>
          <h3 className='address__title'>Адреса</h3>
          <ul className='address__list'>
            {data.map((item, index) => (
              <li key={index} className='address__item' onClick={() => { onClick(item.value) }}>
                {item.value}
              </li>
            ))}
          </ul>
        </div>}
      
    </div>
  );
}
