import React from 'react'
import { useEffect } from 'react';
import styled from 'styled-components'
import { useNavigate,useParams } from "react-router-dom";
const StyledContainer=styled.div`
width: 100%;
min-height: 100vh;
margin-top: 130px;
.pr-detail{
min-height: 80vh;
width: 100%;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
.first-wave{
    min-width: 80%;
    max-width: 80%;
    min-height: 80vh;
    background-color:rgba(208,115,72,0.3);
    -webkit-clip-path: polygon(66% 0, 53% 43%, 57% 100%, 0% 100%, 0 51%, 0% 0%);
      clip-path: polygon(66% 0, 53% 43%, 57% 100%, 0% 100%, 0 51%, 0% 0%);
      .second-wave{
    min-width: 80%;
    max-width: 80%;
    min-height: 80vh;
    background-color:rgba(208,115,72,0.7);
    -webkit-clip-path: polygon(66% 0, 53% 43%, 57% 100%, 0% 100%, 0 51%, 0% 0%);
      clip-path: polygon(66% 0, 53% 43%, 57% 100%, 0% 100%, 0 51%, 0% 0%);
      display: flex;
      flex-direction: column;
      justify-content: center;
      h1{
          text-align:left;
          margin-left: 20px;
          color: white;
        
      }
      p{
          width: 50%;
          text-align: justify;
          margin-left: 20px;
          color: white;

      }
      
}
}
}



@media only screen 
and (min-device-width : 320px) 
and (max-device-width : 480px) {
    margin-top: 100px;
    .pr-detail{
      .first-wave{
          min-width: 100%;
          max-width: 100%;
          -webkit-clip-path: polygon(100% 0, 100% 36%, 75% 100%, 0% 100%, 0 48%, 0% 0%);
clip-path: polygon(100% 0, 100% 36%, 75% 100%, 0% 100%, 0 48%, 0% 0%);
          .second-wave{
            min-width: 100%;
          max-width: 100%;
          -webkit-clip-path: polygon(100% 0, 100% 36%, 75% 100%, 0% 100%, 0 48%, 0% 0%);
clip-path: polygon(100% 0, 100% 36%, 75% 100%, 0% 100%, 0 48%, 0% 0%);
          }
      }
    }
}
`;
export default function ProgramDetailScreen() {
    const params=useParams()
    useEffect(()=>{
   console.log(params)
    },[])

    return (
        <StyledContainer>
            <div style={{
                backgroundImage:`url(${require('../assets/und.jpg')})`
            }} className='pr-detail'>
            <div className='first-wave'>
                <div className='second-wave'>
                    <h1>
                        {
                            params.type=='undergraduate'&&'UNDER-GRADUATE'
                        }
                    </h1>
                    <h1>PROGRAMS</h1>
                    <p>
                    Explore our 60-plus majors, and get ready to reach your full potential 
                    </p>
                </div>
            </div>
            </div>
        </StyledContainer>
    )
}
