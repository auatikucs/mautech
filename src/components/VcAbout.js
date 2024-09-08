import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Registrar from "../assets/Registrar.jpeg";
import dvc_Academics from "../assets/dvc_Academics.jpeg";
import vice_Chancellor from "../assets/vc2.png";
import dvc_Admin from "../assets/domy.jpeg";
import bur from "../assets/domy.jpeg";
import libb from "../assets/librarian.jpg";
import avatar from "../assets/avatar.png";
import { Fade, Zoom, Bounce, Reveal } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";
const StyledVc = styled.div`
  @keyframes scaleStroke {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
  min-height: 100vh;
  width: 100%;
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  overflow: hidden;
  position: relative;
  .phonePr {
    display: none;
  }
  .myVc001 {
    height: 250px;
    width: 250px;
    border-radius: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    z-index: 1;
    margin-top: 30px;

    img {
      height: 180px;
      width: 200px;
      border-radius: 100%;
      z-index: 1;
      position: relative;
    }
    span {
      z-index: 2;
      font-weight: bold;
    }
    .bgv {
      position: absolute;
      bottom: 0;
      background-color: rgba(66, 133, 244, 0.08);
      height: 100px;
      width: 100%;
      border-radius: 100%;
      z-index: 0;
    }
  }

  .others001 {
    height: 200px;
    width: 200px;
    border-radius: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    overflow: hidden;
    z-index: 1;
    opacity: 0;
    cursor: pointer;

    img {
      height: 130px;
      width: 120px;
      border-radius: 100%;
      z-index: 1;
      position: relative;
    }
    span {
      z-index: 2;
      font-weight: bold;
      font-size: 10px;
    }
    .bgv {
      position: absolute;
      bottom: 0;
      background-color: rgba(66, 133, 244, 0.08);
      height: 100px;
      width: 100%;
      border-radius: 100%;
      z-index: 0;
    }
  }
  .others001.bur {
    left: 0;
    top: 0;
    margin-left: 200px;
    margin-top: 30px;
    animation: scaleStroke 2s 1 forwards;
    animation-delay: 2s;
  }
  .others001.reg {
    right: 0;
    top: 0;
    margin-top: 30px;
    margin-right: 200px;
    animation: scaleStroke 2s 1 forwards;
    animation-delay: 3s;
  }

  .others001.lib {
    left: 0;
    bottom: 0;
    margin-bottom: 140px;
    margin-left: 250px;
    animation: scaleStroke 2s 1 forwards;
    animation-delay: 3s;
  }
  .others001.dvc1 {
    right: 0;
    bottom: 0;
    margin-right: 250px;
    margin-bottom: 140px;
    animation: scaleStroke 2s 1 forwards;
    animation-delay: 3s;
  }
  .others001.dvc2 {
    animation: scaleStroke 6s 1 forwards;
    bottom: 0;
    margin-bottom: 50px;
    animation-delay: 5s;
  }

  .myVc001 .main {
    /* transform: translateX(-300px); */
  }

  .stroke01 {
    width: 300px;
    height: 0.01px;
    border: 0.7px dashed #d07348;
    position: absolute;
    left: 0;
    transform: rotate(20deg) translateX(300px) translateY(30px);
    z-index: 0;
    opacity: 0;
    animation: scaleStroke 2s 1 forwards;
  }

  .stroke02 {
    width: 300px;
    height: 0.01px;
    border: 0.7px dashed #d07348;
    position: absolute;
    left: 0;
    transform: rotate(-40deg) translateY(-10px) translateX(400px);
    z-index: 0;
    bottom: 0;
    opacity: 0;
    animation: scaleStroke 2s 1 forwards;
  }
  .stroke03 {
    width: 400px;
    height: 0.01px;
    border: 0.7px dashed #d07348;
    position: absolute;
    right: 0;
    transform: rotate(-20deg) translateY(50px) translateX(-250px);
    z-index: 0;
    opacity: 0;
    animation: scaleStroke 2s 1 forwards;
  }

  .stroke04 {
    width: 400px;
    height: 0.01px;
    border: 0.7px dashed #d07348;
    position: absolute;
    right: 0;
    bottom: 0;
    transform: rotate(35deg) translateX(-400px) translateY(-100px);
    bottom: 0;
    opacity: 0;
    animation: scaleStroke 2s 1 forwards;
  }

  .stroke05 {
    width: 200px;
    height: 0.01px;
    border: 0.7px dashed #d07348;
    position: absolute;
    bottom: 0;
    transform: rotate(90deg) translateX(-200px);
    bottom: 0;
    opacity: 0;
    animation: scaleStroke 2s 1 forwards;
  }

  @media only screen and (max-width: 1060px) {
    min-height: 50vh;
    position: relative;
    padding: 10px;
    overflow: hidden;
    .phonePr {
      display: grid;
      min-height: 200px;
      min-width: 100%;
      grid-template-columns: 1fr 1fr 1fr;
      .myVc001Phone {
        height: 250px;
        width: 250px;
        border-radius: 100%;
        background-color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        overflow: hidden;
        cursor: pointer;
        z-index: 1;
        margin-top: 30px;

        img {
          height: 180px;
          width: 200px;
          border-radius: 100%;
          z-index: 1;
          position: relative;
        }
        span {
          z-index: 2;
          font-weight: bold;
        }
        .bgv {
          position: absolute;
          bottom: 0;
          background-color: rgba(66, 133, 244, 0.08);
          height: 100px;
          width: 100%;
          border-radius: 100%;
          z-index: 0;
        }
      }

      .others001Phone {
        height: 200px;
        width: 200px;
        border-radius: 100%;
        background-color: white;
        display: flex;
        position: relative;
        flex-direction: column;
        align-items: center;
        overflow: hidden;
        z-index: 1;
        opacity: 0;
        cursor: pointer;

        img {
          height: 130px;
          width: 120px;
          border-radius: 100%;
          z-index: 1;
          position: relative;
        }
        span {
          z-index: 2;
          font-weight: bold;
          font-size: 10px;
        }
        .bgv {
          position: absolute;
          bottom: 0;
          background-color: rgba(66, 133, 244, 0.08);
          height: 100px;
          width: 100%;
          border-radius: 100%;
          z-index: 0;
        }
      }
      .others001Phone.bur {
        animation: scaleStroke 2s 1 forwards;
        animation-delay: 2s;
      }
      .others001Phone.reg {
        animation: scaleStroke 2s 1 forwards;
        animation-delay: 3s;
      }

      .others001Phone.lib {
        animation: scaleStroke 2s 1 forwards;
        animation-delay: 3s;
      }
      .others001Phone.dvc1 {
        animation: scaleStroke 2s 1 forwards;
        animation-delay: 3s;
      }
      .others001Phone.dvc2 {
        animation: scaleStroke 6s 1 forwards;
        animation-delay: 5s;
      }
      .others001Phone.vc {
        animation: scaleStroke 1 forwards;
        animation-delay: 0s;
      }
    }

    .stroke01,
    .stroke02,
    .stroke03,
    .stroke04,
    .stroke05 {
      display: none;
    }
    .others001 {
      display: none;
    }
    .myVc001 {
      display: none;
    }
  }

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    .phonePr {
      grid-template-columns: 1fr;
      justify-content: center;
      align-items: center;
      z-index: 200px;
      .others001Phone {
        margin-left: auto;
        margin-right: auto;
        margin-top: 20px;
      }
    }
  }
`;
export default function VcAbout() {
  const [leadershipData, setLeadershipData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://mau-web-server.fly.dev/admin/get-about-leadership")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setLoading(false);

        setLeadershipData(data.result);
        console.log(data.result);
      });
  }, []);

  const route = useNavigate();
  return (
    <Fade triggerOnce>
      <StyledVc>
        {leadershipData &&
          leadershipData.map((vcData) => {
            console.log(vcData, "pouuu");
            return vcData.principalOfficer.mail !== "gmail.com" ? (
              <div
                onClick={() => {
                  route("/pricipal/001");
                }}
                className="myVc001 main"
              >
                {/*<img src={vcData.principalOfficer.image} alt="img" />
                <span>{vcData.name}</span>*/}
                <img src={vice_Chancellor} alt="img" />
                <span>Prof. Ibrahim Umar</span>
                <span>Vice Chancellor</span>
                <div className="bgv"></div>
              </div>
            ) : (
              <div>i'm here</div>
            );
          })}

        {/* <div onClick={()=>{
        route('/pricipal/001')
        }} className='myVc001 main'>
        <img 
        src='https://res.cloudinary.com/nutscoders/image/upload/v1646496506/VC-removebg-preview_zshkhs.png' 
        alt='img'/> 
        <span>Prof. Liman Tukur</span>
        <span>Vice Chancellor</span>
        <div className='bgv'></div>
        </div> */}

        <div className="others001 bur">
          <img src={dvc_Academics} alt="img" />
          <span>Prof Muhammad Inuwa Jaafaru</span>
          <span>DVC Administration</span>
          <div className="bgv"></div>
        </div>

        <div className="others001 reg">
          <img src={dvc_Admin} alt="img" />
          <span>DVC Academics</span>
          <span>DVC Academics</span>
          <div className="bgv"></div>
        </div>

        <div className="others001 lib">
          <img src={Registrar} alt="img" />
          <span>Haj. Halima Mohammed Bala</span>
          <span>Registrar</span>
          <div className="bgv"></div>
        </div>

        <div className="others001 dvc1">
          <img src={bur} alt="img" />
          <span>Alh Ismail Umar</span>
          <span>Bursar</span>
          <div className="bgv"></div>
        </div>

        <div className="others001 dvc2">
          <img src={libb} alt="img" />
          <span>Dr. Murtala Aliyu</span>
          <span>Librarian</span>
          <div className="bgv"></div>
        </div>

        <div className="stroke01"></div>
        <div className="stroke02"></div>
        <div className="stroke03"></div>
        <div className="stroke04"></div>
        <div className="stroke05"></div>

        <div className="phonePr">
          <div
            onClick={() => {
              route("/pricipal/001");
            }}
            className="others001Phone vc"
          >
            <img src={vice_Chancellor} alt="img" />
            <span>Prof. Ibrahim Umar</span>
            <span>Vice Chancellor</span>
            <div className="bgv"></div>
          </div>

          <div className="others001Phone bur">
            <img src={dvc_Academics} alt="img" />
            <span>Prof Muhammad Inuwa Jaafaru</span>
            <span>DVC Administration</span>
            <div className="bgv"></div>
          </div>

          <div className="others001Phone reg">
            <img src={dvc_Admin} alt="img" />
            <span>DVC Academics</span>
            <span>DVC Academics</span>
            <div className="bgv"></div>
          </div>

          <div className="others001Phone lib">
            <img src={Registrar} alt="img" />
            <span>Haj. Halima Mohammed Bala</span>
            <span>Registrar</span>
            <div className="bgv"></div>
          </div>

          <div className="others001Phone dvc1">
            <img src={bur} alt="img" />
            <span>Alh Ismail Umar</span>
            <span>Bursar</span>
            <div className="bgv"></div>
          </div>

          <div className="others001Phone dvc2">
            <img src={libb} alt="img" />
            <span>Dr. Murtala Aliyu</span>
            <span>Librarian</span>
            <div className="bgv"></div>
          </div>
        </div>
      </StyledVc>
      {leadershipData &&
        leadershipData.map((officer) => (
          <div>
            <span>{officer.chancellor.name}</span>
            <span>{officer.chancellor.rank}</span>
            <span>{officer.principalOfficer.name}</span>
            <span>{officer.principalOfficer.rank}</span>
          </div>
        ))}
    </Fade>
  );
}
