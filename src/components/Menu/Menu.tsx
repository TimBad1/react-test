import React from 'react';
import IconCalendar from '../Icons/IconCalendar';
import IconExit from '../Icons/IconExit';
import IconMap from '../Icons/IconMap';
import IconMenuItemMain from '../Icons/IconMenuItemMain';
import IconOptions from '../Icons/IconOptions';
import IconOptionsFinance from '../Icons/IconOptionsFinance';
import IconOptionsProfile from '../Icons/IconOptionsProfile';
import IconSearch from '../Icons/IconSearch';
import IconTable from '../Icons/IconTable';
import IconWidget from '../Icons/IconWidget';
import './menu.sass';
import { MenuList } from './MenuList';

interface IMenuList {
    icon: React.ReactElement;
    id: number;
    name: string;
    menuList?: any;
    href?: string;
  }

const menuList: Array <IMenuList> = [
  { id: 1, name: 'Главная', icon: <IconMenuItemMain />, href: '/'},
  { id: 2, name: 'Поиск адресов', icon: <IconSearch />, href: '/address'},
  { id: 3, name: 'Таблицы', icon: <IconTable />, },
  { id: 4, name: 'Календарь', icon: <IconCalendar />, },
  { id: 5, name: 'Карты', icon: <IconMap />, },
  { id: 6, name: 'Виджеты', icon: <IconWidget />, },
  { id: 7, name: 'Настройки', icon: <IconOptions />, 
  menuList: [
    { id: 8, name: 'Настройки профиля', icon: <IconOptionsProfile />,  },
    { id: 9, name: 'Управление финансами', icon: <IconOptionsFinance />, },
  ]},
]

export function Menu() {
  return (
    <div className="menu">
      <h2 className="menu__title">
        Меню
      </h2>
      
      <MenuList menuList={menuList}/>
      <MenuList menuList={[{ id: 10, name: 'Выход', icon: <IconExit />, }]} />
    </div>

    
  );
}
