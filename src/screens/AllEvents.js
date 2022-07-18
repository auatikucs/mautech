import { Divider } from '@mui/material';
import React, { useEffect } from 'react'
import styled from 'styled-components'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'
import MyNews from '../sub-components/MyNews';
const StyledContainer=styled.div`
min-height: 70vh;
width: 100%;
background-color:white;
margin-top: 155px;
padding: 20px;
.eveHead{
    height: 50px;
    width:60%;
    background-color: rgba(160, 50, 50, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    h2{
        color: rgba(160, 50, 50, 1);
    }
}
p{
    width: 80%;
    text-align: justify;
}
.eveDonl{
    display: flex;
    width: 50%;
    justify-content: center;
    align-items: center;
    p{
        width: 50%;
    }
    span{
        font-weight: bold;
    }
}
.univCal{
    min-height: 60vh;
    width: 100%;
    background-color:transparent;
    padding: 20px;
    display: flex;
    flex-direction: row;
    .theCal{
        width: 30%;
        height: 50vh;
        h2{
            color: rgba(160, 50, 50, 1);
        }
    }
    .theDet{
    width: 60%;
    min-height:60vh;
    background-color:transparent;
  
    .detMainEv{
    height: 60px;
    border-bottom:1px solid lightgray;
    margin-top: 10px;
    .det1st{
        display: flex;
        flex-direction: row;
        .labDt{
            margin-left: auto;
        }
        .labHead{
            font-weight: bold;
        }
    }
    }
    }
}
.eveHead2{
    height: 50px;
    width:95%;
    background-color: rgba(160, 50, 50, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    h2{
        color: rgba(160, 50, 50, 1);
    }
    }
.pastEv{
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 90%;
    background-color: transparent;
    margin-left: auto;
    margin-right: auto;
    min-height: 100px;
    padding: 20px;
}
`;
export default function AllEvents() {
    useEffect(()=>{
        window.scrollTo({
            top:0,
            behavior: 'smooth',
          })
    },[])
    return (
        <StyledContainer>
        <div className='univCal'>
            <div className='theCal'>
            <h2>Calender</h2>
            <Calendar/>
            </div>
            <div className='theDet'>
            <div className='eveHead2'>
               <h2>University Upcoming Events</h2>
            </div> 
            
            <div className='detMainEv'>
            <div className='det1st'>
            <span className='labHead'>Senate General Conference and Key Notes </span>
            <span className='labDt'>22nd, May 2022</span>
            </div>
            <span>Multi Purpose Hall </span>
            </div>


            <div className='detMainEv'>
            <div className='det1st'>
            <span className='labHead'>Senate General Conference and Key Notes </span>
            <span className='labDt'>22nd, May 2022</span>
            </div>
            <span>Multi Purpose Hall </span>
            </div>

            <div className='detMainEv'>
            <div className='det1st'>
            <span className='labHead'>Senate General Conference and Key Notes </span>
            <span className='labDt'>22nd, May 2022</span>
            </div>
            <span>Multi Purpose Hall </span>
            </div>
            </div>
        </div>
        <div className='eveHead2'>
               <h2>University Past Events</h2>
         </div> 
         <div className='pastEv'>
        <MyNews news='Registration for 2022/2023 will commence on Monday 23rd March 2022'/>
        <MyNews news='Registration for 2022/2023 will commence on Monday 23rd March 2022'/>
         </div>
        </StyledContainer>
    )
}
