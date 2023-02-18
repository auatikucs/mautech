import mau_pic_footer from '../assets/mau_pic_footer.jpg';
import location from './location.png';
import mau_logo from './mau_logo.png';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

import { AccessAlarm, Instagram, ThreeDRotation } from '@mui/icons-material';

import { Routes, Route, Link } from "react-router-dom";
const Footer = () => {
    return ( 
        <div className="Footer-Section" styles={{ backgroundImage:`url(${mau_pic_footer})` }}>
           <div >
           {/* <img src={mau_pic_footer} alt="" srcset="" width='100%' /> */}
           
            <div className="Footer-Container">
               <div className="Footer-Content">
                  <h4>Quick Links</h4>
                  <nav className='footerNav'>
                    <div> <Link to='/'>Admissions</Link></div>
                    <div> <Link to='/'>Portals</Link></div>
                    <div> <Link to='/'>Downloads</Link></div>
                    <div> <Link to='/'>Careers</Link></div>
                   
                  
                  </nav>
               </div>
               <div className="Footer-Content">
                  <h4>Contact Info</h4>
                  <nav>
                    <div> <p>Modibbo Adama University 
                    Yola, <br></br>PMB 2076 Yola, Adamawa State </p> </div>
                    <div> <Link to='/'>info@mau.edu.ng </Link></div>
                    <div> <Link to='/'>08060534900</Link></div>
                    <div>
                       <div>
                       <WhatsAppIcon/>
                       <FacebookIcon/>
                       <InstagramIcon/>
                       <LinkedInIcon/>
                        <TwitterIcon/>
                        <YouTubeIcon/>
                       </div>
                    
                    <img className='' src={mau_logo} alt="" srcset="" width='50px' height='50px' />
                    </div>
                   
                  
                  </nav>
               </div>
               <div className="Footer-Content">
                  <h4 className='Site-Map-Header'>Site Map</h4>
                 <div> <img className='Location-Img' src={location} alt="" srcset="" width='200px' height='200px' /></div> 
                  </div>
                  <div className="Footer-Content-Powered" >
                     <h5>Powered by MAU Software Development and Audit Department</h5>
                  </div>
               </div>
            </div>
        </div>
     );
}
 
export default Footer;