 import React,{useState} from 'react';
 import {FcAssistant} from 'react-icons/fc'
 
 import {
   MainPageWrapper,
   MainPageHeader,
   MainPageHeaderContainer,
   MainPageRow,
   MainPageCol,
   MainPageLogo,
   MainPageLogoLink,
   MainPageCol2,
   MainPageColMenu,
   MainPageNav,
   MainPagelist,
   MainPageButtonH1,
   Form,
   MainPagButton
 } from '../style/MainPageStyle'
import Menu from './Menu';

function MainHeader() {
      // eslint-disable-next-line no-unused-vars
     // eslint-disable-next-line react-hooks/rules-of-hooks
     const [mouseover,setMouseOver] = useState(false);

     const onMouseOver = () => {
         setMouseOver(mouseover => !mouseover);
     }
     return (
        <MainPageWrapper>
        <MainPageHeader>
            <MainPageHeaderContainer>
                <MainPageRow>
                    <MainPageCol>
                        <MainPageLogo>
                            <FcAssistant size="50px"/>
                            <MainPageLogoLink to="/">PORTFOLIO</MainPageLogoLink>
                        </MainPageLogo>
                    </MainPageCol>
                    <MainPageCol2>
                        <MainPageColMenu>
                          <MainPageNav>
                             <MainPagelist>Home</MainPagelist>
                             <MainPagelist>About</MainPagelist>
                             <MainPagelist>Services</MainPagelist>
                             <MainPagelist>Portfolio</MainPagelist>
                             <MainPagelist onMouseOverCapture={onMouseOver}>Page</MainPagelist>
                             <MainPagelist>Contact</MainPagelist>
                             <MainPagButton to="/s" >
                           <MainPageButtonH1 type="button">
                                 Get Free Consultent
                           </MainPageButtonH1>
                             </MainPagButton>
                          </MainPageNav>
                        </MainPageColMenu>
                          <Form onMouseLeave={onMouseOver}> 
                              {mouseover && <Menu/>}
                         </Form>
                    </MainPageCol2>
                </MainPageRow>
            </MainPageHeaderContainer>
        </MainPageHeader>
    </MainPageWrapper>
     );
 }


 export default MainHeader;