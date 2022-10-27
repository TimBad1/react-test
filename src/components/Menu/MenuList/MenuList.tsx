import React from 'react';
import { MenuItem } from '../MenuItem';
import './menulist.sass';

interface IMenuItem {
  icon: React.ReactElement;
  id: number;
  name: string;
  menuList?: any;
}

interface IMenuList {
  menuList: IMenuItem[]
}

export function MenuList(menuList: IMenuList) {
  // console.log(menuList);
  return (
    <ul className="menu__list">
    {menuList.menuList.map((item: IMenuItem) => {
      console.log(item.menuList);
      return (<li className="menu__item" key={item.id}>
        <MenuItem 
          name={item.name} 
          icon={item.icon} 
        />
        {item.menuList && 
        <MenuList menuList={item.menuList}/>
        }
      </li>) 
    }      
    )}
  </ul>
  );
}
