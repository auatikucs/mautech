import mau_pic_footer from "../assets/mau_pic_footer.jpg";
import location from "./location.png";
import mau_logo from "./mau_logo.png";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

import { AccessAlarm, Instagram, ThreeDRotation } from "@mui/icons-material";

import { Routes, Route, Link } from "react-router-dom";
const Footer = () => {
  return (
    <div
      className="Footer-Section"
      styles={{ backgroundImage: `url(${mau_pic_footer})` }}
    >
      <div>
        {/* <img src={mau_pic_footer} alt="" srcset="" width='100%' /> */}

        <div className="Footer-Container">
          <div className="Footer-Content">
            <h4>Quick Links</h4>
            <nav className="footerNav">
              <div>
                {" "}
                <Link to="/">Admissions</Link>
              </div>
              <div>
                {" "}
                <Link to="/">Portals</Link>
              </div>
              <div>
                {" "}
                <Link to="/">Downloads</Link>
              </div>
              <div>
                {" "}
                <Link to="/">Careers</Link>
              </div>
            </nav>
          </div>
          <div className="Footer-Content">
            <h4>Contact Info</h4>
            <nav>
              <div>
                {" "}
                <p>
                  Modibbo Adama University Yola, <br></br>PMB 2076 Yola, Adamawa
                  State{" "}
                </p>{" "}
              </div>
              <div>
                {" "}
                <Link to="/">info@mau.edu.ng </Link>
              </div>
              <div>
                {" "}
                <Link to="/">08060534900</Link>
              </div>
              <div>
                <div>
                  <WhatsAppIcon />
                  <FacebookIcon />
                  <InstagramIcon />
                  <LinkedInIcon />
                  <TwitterIcon />
                  <YouTubeIcon />
                </div>

                <img
                  className=""
                  src={mau_logo}
                  alt=""
                  srcset=""
                  width="50px"
                  height="50px"
                />
              </div>
            </nav>
          </div>
          <div className="Footer-Content">
            <div style={{
               width:'100%',
               height:300,
               display:'flex',
               justifyContent:'center',
               alignItems:'center'
            }}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d246.0672914270113!2d12.39824850393125!3d9.326475093314915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10fc3f2fb061f08d%3A0xf0f74910b95c3254!2sModibbo%20Adama%20University%20Of%20Technology!5e0!3m2!1sen!2sng!4v1678532820556!5m2!1sen!2sng"
                style={{
                 width:'90%',
                 height:200  
                }}
                allowfullscreen="true"
                loading="lazy"
                
               />
            </div>
          </div>
          <div className="Footer-Content-Powered">
            <h5>Powered by MAU Software Development and Audit Department</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
