import { Download } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import DownloadImg from "../assets/downloadss.gif";
const StyledContainer = styled.div`
  margin-top: 100px;
  min-height: 50vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  .downLBg {
    min-height: 50vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .mainDownlo {
    padding: 20px;
    min-width: 100%;
    display: flex;
    flex-direction: column;
    .donHe {
      width: 100%;
      text-align: center;
      height: 60px;
      color: white;
      background-color: #d07348;
      font-size: 40px;
      border-radius: 10px;
    }
    .downFil {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-top: 15px;
      border-bottom: 1px solid gray;
      span {
        font-size: 20px;
      }
    }
  }
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    grid-template-columns: 1fr;
    .downLBg {
      display: none;
    }
    .mainDownlo {
      padding: 0px;
      width: 100%;
      display: flex;
      flex-direction: column;
      margin-top: 20px;
      .donHe {
        width: 100%;
        text-align: center;
        height: 40px;
        color: white;
        background-color: #d07348;
        font-size: 20px;
        border-radius: 10px;
      }
      .downFil {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 15px;
        border-bottom: 1px solid gray;
        padding: 5px;
        span {
          font-size: 20px;
        }
      }
    }
  }
`;
export default function Downloads() {
  const [downlods, setDownlods] = useState([]);
  const [programs, setAllPrograms] = useState(null);
  useEffect(() => {
    fetch(
      "https://mau-web-server.fly.dev/admin/get-all-download-with-pagination?page=1&limit=8"
    ).then((res) => {
      res.json().then((data) => {
        setDownlods(data.result);
      });
    });
  }, []);
  return (
    <StyledContainer>
      <div className="mainDownlo">
      <span className="donHe">Downloads</span>
        {downlods.length > 0 &&
          downlods.map((dow, ind) => (
            <div
              onClick={() => {
                const el = document.createElement("a");
                el.setAttribute("href", `${dow.downloadLink}`);
                el.setAttribute("download", "doc");
                el.setAttribute("target", "_blank");
                // console.log(el)
                el.click();
              }}
              key={ind}
              className="downFil"
            >
              <span>{dow.downloadName}</span>
              <Download fill="#000000" />
            </div>
          ))}
       

      
      </div>
      <div className="downLBg">
        <img src={DownloadImg} alt="img" />
      </div>
    </StyledContainer>
  );
}
