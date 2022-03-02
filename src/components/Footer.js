import { FacebookOutlined, LinkedIn, MailOutline, Twitter } from '@mui/icons-material';
import { Divider } from '@mui/material';
import React from 'react'
import styled from 'styled-components'
import MyLinks from './MyLinks';

const StyledFooter=styled.div`
min-height: 70vh;
width: 100%;
overflow-x: hidden;
background-color: white;
margin-bottom: 50px;
.footer-cont{
    min-width: 100%;
    min-height: 65vh;
    background-color:transparent;
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    .sch-map{
        width: 100%;
        height: 100%;
        background-color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .quickLinks{
        width: 80%;
        height: 100%;
        background-color:white;
        display: flex;
        flex-direction: column;
        h3{
            text-align: center;
            color:#D07348;
        }
     
    }

    .contact{
        width: 100%;
        height: 100%;
        background-color:white;
        display: flex;
        flex-direction: column;
        h3{
            text-align: center;
            color:#D07348;
            width: 80%;
        }
        .footLogo{
            width: 80%;
            min-height: 200px;
            background-color:#f9f9f9 ;
            box-shadow: 0px 0px 10px rgba(0,0,0,0.5);
            display:flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            h2{
                color:#D07348;
                text-align: center;
                margin-right: 20px;
                margin-left: 20px;
            }
            p{
                color:#D07348;
        
            }
            img{
                width: 100px;
                height: 100px;
            }
        }
        .footIcons{
            display: flex;
            width: 80%;
            justify-content: space-around;
            margin-top: 20px;
        }
    }

}
@media only screen 
and (min-device-width : 320px) 
and (max-device-width : 480px) {
    .footer-cont{
       grid-template-columns: 1fr;
       .quickLinks{
        width: 100%;
     
     
    }
       .contact{
           width: 90%;
           h3{
               width: 100%;
           }
           .footLogo{
                   width: 90%;
                   margin-left:auto;
                   margin-right: auto;
               }
           .footIcons{
            display: flex;
            width: 90%;
        
        }
       }
    }
}
`;
export default function Footer() {
    return (
        <StyledFooter>
            <Divider style={{ backgroundColor: '#D07348',marginBottom:20 }} />
 <div className='footer-cont'>
              <div className='sch-map'>

    <div class="mapouter">
    <div class="gmap_canvas">
  <iframe width="414" height="339" 
  id="gmap_canvas" 
  src="https://maps.google.com/maps?q=Modibbo%20adama%20univ&t=&z=17&ie=UTF8&iwloc=&output=embed" 
  frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
   <a href="https://www.online-timer.net"></a><br></br>
   <a href="https://www.embedgooglemap.net">embedded maps</a>
  </div>
  </div>
  <h4>P.M.B. 2076, Yola Adamawa State Nigeria.</h4>

              </div>
              <div className='quickLinks'>
                  <h3>Quick Links</h3>
                  <MyLinks link='Admissions'/>
                  <MyLinks link='Academics'/>
                  <MyLinks link='Portal'/>
                  <MyLinks link='Alumni'/>
                  <MyLinks link='Campus Life'/>
                  <MyLinks link='About Us'/>
              </div>

              <div className='contact'>
              <h3>Contact Us</h3>
              <div className='footLogo'>
                  <img src={require('../assets/mau.png')}/>
                  <h2>Modibbo Adama University, Yola</h2>
                  <i><p>Established in 1981.</p></i>
              </div>

              <div className='footIcons'>
              <FacebookOutlined style={{
                  height:30,
                  width:30,
                  color:'#3b5998'
              }}/>
              <MailOutline style={{
                  height:30,
                  width:30,
                  color:'#bb001b'
              }}/>
              <Twitter style={{
                  height:30,
                  width:30,
                  color:'#00acee'
              }}/>
              <LinkedIn style={{
                  height:30,
                  width:30,
                  color:'#0e76a8'}}/>

              </div>
              </div>

            </div>
        </StyledFooter>
    )
}
