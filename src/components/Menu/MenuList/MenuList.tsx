import React from 'react';
import { MenuItem } from '../MenuItem';
import './menulist.sass';

interface IMenuList {
  menuList: {
    icon: React.ReactElement;
    id: number;
    name: string;
    menuList?: any;
  }[]
}

export function MenuList(menuList: IMenuList) {
  // console.log(menuList);
  return (
    <ul className="menu__list">
    {menuList.menuList && menuList.menuList.map((item: any) => {
      console.log(item);
      return (<li className="menu__item" key={item.id}>
        <MenuItem 
          name={item.name} 
          icon={item.icon} 
        />
        
      </li>)
    }
      
      
    )}
  </ul>
  );
}
