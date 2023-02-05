import React, { useEffect, useState } from 'react'
import { Fade } from 'react-awesome-reveal';
import styled from 'styled-components'
import HomeList from '../sub-components/HomeList';
import MyLinks from './MyLinks';

const StyledContainer=styled.div`
min-height: 70vh;
width: 100%;
background-color:white;
display: grid;
grid-gap: 20px;
grid-template-columns: 1fr 1fr;
padding: 20px;
margin-bottom:70px ;
.onlineLinks{
background-color:rgba(255, 197, 58, 0.3);
width: 85%;
.onlineLinsHead{
    height:100px;
    background-color: #A03232;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
  h4{
      color:white;
      text-align: center;
  }
}
img{
    width: 100%;
    height: 100%;
}
.downlaods{
    width: 85%;
    .onlineDosHead{
    height:100px;
    background-color:rgba(255, 197, 58, 1);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center; 
    }
}
.vMoree{
    margin-top:auto;
}
@media only screen 
and (min-device-width : 320px) 
and (max-device-width : 480px) {
    grid-template-columns: 1fr;
    padding:5px;
    margin-bottom:30px;
    .onlineLinks{
        width:95%;
    }
    .downlaods{
        width:95%;
    }
}
`;
export default function OnlineLinks() {
const [downlods,setDownlods]=useState([])
const [programs,setAllPrograms]=useState(null)
    useEffect(()=>{
        fetch('https://mau-web-server.fly.dev/admin/get-all-download-with-pagination?page=1&limit=8')
        .then(res=>{
            res.json()
            .then(data=>{
                setDownlods(data.result)
                fetch(`https://mau-web-server.fly.dev/admin/get-all-portals-with-pagination?page=1&limit=8`)
                .then(res => {
                    res.json()
                        .then(data => {
                         setAllPrograms(data.result)
                        })
                }).catch(err=>{
                    
                })
            })
        }) 
    },[])
    return (
        <Fade triggerOnce>     
        <StyledContainer>
           <div className='downlaods'>
           <div className='onlineDosHead'>
                <h4>Quick  Downloads</h4>
                </div>
                {
                    downlods.length>0&&(
                        downlods.map((dl,ind)=>(
                            <HomeList route={dl.downloadLink} key={ind} link={dl.downloadName}/>
                        ))
                    )
                }
                 {/* <MyLinks link='2021/2022 Registration Procedures Download'/>
                 <MyLinks link='Senate Approved 2021/2022 Academic Calender Download'/>
                 <MyLinks link='Registration for 2022/2023 will commence on Monday 23rd March 2022'/> */}
                 <div className='vMoree'>
                 <HomeList id={'/downloads'} link='View More'/>
                 </div>
                 
               
           </div>
            <div className='onlineLinks'>
                <div className='onlineLinsHead'>
                <h4>Quick Links to Portal</h4>
                </div>
               {
               programs!=null&&(
                programs.map((prog,ind)=>(
                <HomeList route={prog.portalLinkValue} isLink={true} link={prog.portalName}/>   
                ))
               )
               }
                 <HomeList id={'/portals'} link='View More'/>
            </div>
        </StyledContainer>
        </Fade>

    )
}
