import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuList } from '../MenuList';
import './menuitem.sass';

interface IMenuItem {
  icon: React.ReactElement;
  name: string;
  button: boolean;
  isOpen: boolean;
  menuList?: any;
  href?: string;
}

export function MenuItem({ icon, name, button, menuList, href, isOpen }: IMenuItem) {
  console.log(menuList);
  const [isOpenMenu, setisOpenMenu] = useState(isOpen);

  return (
    <Link to={href ? href : '*'}>
      <li className={`menu__item ${isOpenMenu ? 'active' : ''}`}>
        <div onClick={() => setisOpenMenu(!isOpenMenu)} >
          {icon}
          <p>{name}</p>
          {button && (
            <button className={`menu__item-drop ${isOpenMenu ? 'active' : ''}`}></button>
          )}
        </div>
        {menuList && isOpenMenu &&
          <MenuList menuList={menuList}/>
          }
      </li>
    </Link>
    
  );
}

//         // isOpen={isOpen}
//         // name={item.name} 
//         // icon={item.icon} 
//         // button={item.menuList ? true : false}
//       />
//       // <li className="menu__item" key={item.id}>
//       //   <MenuItem 
//       //     isOpen={isOpen}
//       //     name={item.name} 
//       //     icon={item.icon} 
//       //     button={item.menuList ? true : false}
//       //   />
//       //   
//       // </li>) 
//     // }      
//     // )}
  
//   );
// }
