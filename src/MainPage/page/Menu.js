 import React from 'react';
import { MenuLink, MenuList, MenuWrapper } from './MenuStyle';

function Menu() {
     return (
       <MenuWrapper>
         <MenuList>
             <MenuLink to="/">Blog</MenuLink>
             <MenuLink to="/">Blog Details</MenuLink>
             <MenuLink to="/">Element</MenuLink>
             <MenuLink to="/">Portfolio Details</MenuLink>
         </MenuList>
       </MenuWrapper>
     );
 }


 export default Menu;