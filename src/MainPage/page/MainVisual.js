 import React from 'react';
import { MainVisualWrapper, 
    MainVisualVideoBg,
     MainVisualContainer, 
     MainVisualRow, 
     MainVisualCol, 
     MainVisualHero, 
     MainVisualH1, 
     MainVisualH2,
     MainVisualP, 
     MainVisualButton,
     MainVisualButton1} from '../style/MainVisualStyle';
import Video from '../style/Video3.mp4'
import '../style/MainVisual.scss'

export function MainVisual() {
     return (
       <MainVisualWrapper>
           <MainVisualVideoBg autoPlay muted src={Video} type="video/mp4">
           </MainVisualVideoBg>
               <MainVisualContainer>
                      <MainVisualRow>
                          <MainVisualCol>
                               <MainVisualHero>
                                  <MainVisualH1>GET EVERY SINGLE SOLUTIONS</MainVisualH1>
                                  <MainVisualH2>I'm Font-End Developer</MainVisualH2>
                                  <MainVisualH2>Kim Jung Ho</MainVisualH2>
                                  <MainVisualP>jhorem refefelkfmda  fmawkf afmka <br/></MainVisualP>
                                  <MainVisualP>ffkmwfamfkwf fwmakf jhorem refefelkfmda  fmawkf <br/></MainVisualP>
                                  <MainVisualP>afmka ffkmwfamfkwf fwmakf jhorem refefelkmakf</MainVisualP>
                                  <MainVisualButton>
                                      <MainVisualButton1 type="button" value="Learn More" className="Button1">
                                          Learn More
                                      </MainVisualButton1>
                                      <MainVisualButton1 type="button" value="Hire Me" className="Button2">
                                           Hire Me
                                      </MainVisualButton1>
                                  </MainVisualButton>
                               </MainVisualHero>
                          </MainVisualCol>
                      </MainVisualRow>
               </MainVisualContainer>
       </MainVisualWrapper>
     );
 }


 export default MainVisual;