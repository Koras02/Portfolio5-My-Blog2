import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom'

export const MenuWrapper = styled.div`
//    background:#000;
   width:178px;
   height:178px;  
   position:relative;
   border:1px solid #000;
   left:820px;
   top:-20px;
`


export const MenuList = styled.div`
   width:170px;
   height:144px;
   padding:17px 0px 17px 0px;
//    border:1px solid #000;
`;

export const MenuLink = styled(LinkR)`
   display:block;
   margin-top:2px;
   text-decoration:none;
   color:#000;
   font:bold 14px/24px arial;
  padding:6px 10px 6px 10px;
`