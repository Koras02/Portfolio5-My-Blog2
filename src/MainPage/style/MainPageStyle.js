 import styled from 'styled-components';
 import {Link as LinkR} from 'react-router-dom';

 
 export const MainPageWrapper = styled.div`
   width:100%;
   height:103px;
//    border:1px solid #000;
   display:block;
   
 `;


 export const MainPageHeader = styled.div`
    z-index:1;
    // border:1px solid #000;

 `

export const MainPageHeaderContainer = styled.div`
  width:100%;
   height:103px;
//    border:1px solid #000;
   margin:auto;
   position:absolute;
   `;

export const MainPageRow = styled.div`
    width:100%;
    height:102.72px;
    boder:1px solid red;
    // background:red;
    margin:auto;
`


 
export const MainPageCol = styled.div`
//    border:1px solid #000; 
   width:254px;
 
   padding:0px 15px 0px 15px;
 
   position:absolute;
   margin:20px;
   
    
   

`;

export const MainPageLogo = styled.div`
   width:254.16px;
   height:49px;
   
//    border:1px solid #000;
   display:flex;

`;

export const MainPageLogoLink = styled.div`
  font:bold 24px/34px arial;
  margin-left:10px;
`

export const MainPageCol2 =  styled.div`
 width:1420px;
 height:102px;  
 float:right;
`;

export const MainPageColMenu = styled.div`
  width:586px;
  height:102px;
//   border:1px solid #000;
  margin:auto;
  
`
export const MainPageNav = styled.div`
   margin:auto;
`
 
export const MainPagelist = styled.div`
   float:left;
   font:bold 14px/34px arial;
   margin:18px;
   margin-left:30px;
   display:flex;
   position:relative;
   top:10px;
`;

export const MainPagButton = styled(LinkR)`
   width:190px;
   height:54px;
   float:right;
   position:relative;
   left:40%;
   bottom:50px;
//    border: 1px solid #000;
border-radius:10%;
   background:red;
   outline:none;
   
   
`
export const MainPageButtonH1 = styled.button`
   background:#faa2c1;
   outline:none;
   width:190px;
   height:54px;
   border-radius:10%;
   border:2px solid pink;
   
`

export const Form = styled.div`
    width:20%;
    height:90%;
  
`