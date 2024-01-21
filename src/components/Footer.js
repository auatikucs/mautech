import mau_pic_footer from "../assets/mau_pic_footer.jpg";
import location from "./location.png";
import mau_logo from "./mau_logo.png";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import { PhoneInTalkRounded } from "@mui/icons-material";
import { MessageRounded } from "@mui/icons-material";
import { EmailOutlined } from "@mui/icons-material";

import { AccessAlarm, Instagram, ThreeDRotation } from "@mui/icons-material";

import { Routes, Route, Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div
        className="Footer-Section"
        styles={{ backgroundImage: `url(${mau_pic_footer})` }}
      >
        <div>
          {/* <img src={mau_pic_footer} alt="" srcset="" width='100%' /> */}

          <div className="Footer-Container">
            <div className="Footer-Content">
              <h4>CAMPUS</h4>
              <nav className="footerNav">
                <div>
                  {" "}
                  <Link to="/">Home Page</Link>
                </div>
                <div>
                  {" "}
                  <Link to="/about">About</Link>
                </div>
                <div>
                  {" "}
                  <Link to="/allnews">News & Events</Link>
                </div>
                <div>
                  {" "}
                  <Link to="/">Contact</Link>
                </div>
              </nav>
            </div>
            <div className="Footer-Content">
              <h4>Facilities & Services</h4>
              <nav className="footerNav">
                <div>
                  {" "}
                  <Link to="/facility/001">Central Lab</Link>
                </div>
                <div>
                  {" "}
                  <Link to="/">CEMIT</Link>
                </div>
                <div>
                  {" "}
                  <Link to="/">Publishing Centre</Link>
                </div>
                <div>
                  {" "}
                  <Link to="/">Chevron Biotech</Link>
                </div>
              </nav>
            </div>
            <div className="Footer-Content">
              <h4>Portals</h4>
              <nav className="footerNav">
                <div>
                  {" "}
                  <Link to="/admissions">Admission </Link>
                </div>
                <div>
                  {" "}
                  <Link to="https://mautech_postutme.admissions.cloud/">
                    Undergraduate{" "}
                  </Link>
                </div>
                <div>
                  {" "}
                  <Link to="https://pgmau.safsrms.com/">Post-Graduate </Link>
                </div>
                <div>
                  {" "}
                  <Link to="https://cdlmautech.admissions.cloud/">
                    Distance Learning{" "}
                  </Link>
                </div>
              </nav>
            </div>

            <div className="Footer-Content" style={{ color: "white" }}>
              <h4>Contact Info</h4>
              <nav>
                <div>
                  {" "}
                  <p>
                    Modibbo Adama University Yola, <br></br>PMB 2076 Yola,
                    Adamawa State{" "}
                  </p>{" "}
                </div>
                <div style={{ display: "flex" }}>
                  {" "}
                  <EmailOutlined style={{ padding: 10 }} />
                  <span
                    to="/"
                    style={{
                      color: "white",
                      textDecoration: "none",
                      paddingTop: 10,
                    }}
                  >
                    info@mau.edu.ng{" "}
                  </span>
                </div>
                {/*
              <div style={{display: 'flex'}}>
             
                <PhoneInTalkRounded style={{padding:5}}/><Link to="/" style={{color:'white', textDecoration:'none', padding:5,}}></Link>
              </div>
              */}

                <div>
                  {/* <div>
                  <WhatsAppIcon  style={{color:'white', fontSize:30}}/>
                  <FacebookIcon style={{color:'white', fontSize:30}}/>
                  <InstagramIcon style={{color:'white', fontSize:30}} />
                  <LinkedInIcon style={{color:'white', fontSize:30}}/>
                  <TwitterIcon style={{color:'white', fontSize:30}}/>
                  <YouTubeIcon style={{color:'white', fontSize:30}}/>
                </div> */}

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
              <div
                style={{
                  width: "100%",
                  height: 300,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <iframe
                  title="ifr"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d54496.40307939547!2d12.465393282272906!3d9.356802729030514!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10fc4183d92b3b55%3A0x5cafbef289d57e60!2sModibbo%20Adama%20University%2C%20Yola!5e0!3m2!1sen!2sng!4v1705768875426!5m2!1sen!2sng"
                  style={{
                    width: "100%",
                    height: 250,
                  }}
                  allowfullscreen="true"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
        <center>
          {" "}
          <div className="Footer-Content-Powered1">
            <hr></hr>
            <h3 style={{ color: "white" }}>Follow us </h3>
            <div className="Social-Media-Container">
              <WhatsAppIcon className="Social-Media-Icons" />
              <FacebookIcon className="Social-Media-Icons" />
              <InstagramIcon className="Social-Media-Icons" />
              <LinkedInIcon className="Social-Media-Icons" />
              <TwitterIcon className="Social-Media-Icons" />
              <YouTubeIcon className="Social-Media-Icons" />
            </div>
          </div>
        </center>
      </div>

      <div className="Footer-Content-Powered">
        <h5>Powered by MAU Software Development and Audit Department</h5>
      </div>
    </>
  );
};

export default Footer;
