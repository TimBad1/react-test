import React from 'react';
import { IconLogo } from '../Icons/IconLogo';
import { IconUser } from '../Icons/IconUser';
import './header.sass';
import { HeaderBlock } from './HeaderBlock';


export function Header() {
  return (
    <header className="header">
      <HeaderBlock 
        imageSrc={<IconLogo />}
        text={'wrench crm'}
      />
      <HeaderBlock
        imageSrc={<IconUser />}
        text={'Имя Фамилия'}
      />
    </header>
  );
}
