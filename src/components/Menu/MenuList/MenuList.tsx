import React from 'react';
import { MenuItem } from '../MenuItem';
import './menulist.sass';

interface IMenuItem {
  icon: React.ReactElement;
  id: number;
  name: string;
  href?: string;
  menuList?: IMenuList;
}

interface IMenuList {
  menuList: IMenuItem[]
}

export function MenuList(menuList: IMenuList) {
  let isOpen = false;
  return (
    <ul className={`menu__list ${isOpen ? 'active' : ''}`}> 
    {menuList.menuList.map((item: IMenuItem) => (
      <MenuItem 
        key={item.id}
        isOpen={isOpen}
        name={item.name} 
        icon={item.icon} 
        menuList={item.menuList}
        href={item.href}
        button={item.menuList ? true : false} 
      />)
      )
    }
    </ul>
  )
}