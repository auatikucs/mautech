import React, { useContext, useState } from 'react'
import { useEffect } from 'react';
import styled from 'styled-components'
import { useNavigate,useParams } from "react-router-dom";
import MyCard from '../sub-components/MyCard'
import MyLinks from '../components/MyLinks';
import AppContext from '../Context/app/appContext';
import Img from '../assets/mau_cover.jpg'
import { Button } from '@mui/material';
const StyledContainer=styled.div`
width: 100%;
min-height: 60vh;
margin-top: 130px;
.programHead{
    min-height: 40vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    .progCoverHead{
    height:70px;
    background-color: rgba(0, 0, 0, 1);
    width: 100%;
    h3{
        text-align: center;
        color: white;
    }
    }
.progCont{
    align-self: center;
    h1{
        text-align: center;
        color: white;
    }
}
}
.mainProgCont{
    padding: 10px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    .mainProgh2{
        height: 50px;
        border-bottom: 1px solid rgba(208, 115, 72, 1);
        span{
            color: rgba(208, 115, 72, 1);
            font-size: 31px;
        }
    }
    p{
        text-align: justify;
        
    }
}

@media only screen 
and (min-device-width : 320px) 
and (max-device-width : 480px) {
    margin-top: 100px;
    .sch-list{
        grid-template-columns: 1fr;
    }
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
    const [progList,setList]=useState([])
    const [loading,setLoading]=useState(false)
    const {id,department}=useParams()
    const navigate=useNavigate()
    const loadData=(id)=>{
        setLoading(true)
        fetch(`https://new-modibbo-adama.herokuapp.com/admin/get-single-program?programId=${id}&activity=faculty`)
        .then(res => {
            res.json()
                .then(data => {
                    setLoading(false)
                    setList(data.message)
                })
        }).catch(err=>{
            setLoading(false)
        })
    }

    const params=useParams()
    useEffect(()=>{
        window.scrollTo({
            top:0,
            behavior: 'smooth',
          })
        loadData(id)
    },[])

    return (
        <StyledContainer>
        <div style={{
            background:`linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url(${Img})`,
            backgroundPosition:'center',
            backgroundSize:'cover',
        }} className='programHead'>
        {
            !loading&&
            progList.length>0&&(
            <>
          <div className='progCont'>
                <h1>{department}</h1>
            </div>
            <div className='progCoverHead'>
           <h3>{progList[0].name}</h3>
            </div>
            </>
            )
        }
           
        </div>
        {
            !loading&&(
                progList.length>0&&(
                    <div className='mainProgCont'>
                    <div className='mainProgh2'>
                        <span>Admission  Requirements</span>
                    </div>
                    
                    {progList[0].admissionRequirement.map((rq,ind)=>(
                        <p key={ind}>✔{rq}</p>
                    ))}
          
                    
                    <div className='mainProgh2'>
                        <span>Careeer Prospects</span>
                    </div>
                    <p>
                   {
                       progList[0].careerProspect
                   }
                    </p>
                    <div className='mainProgh2'>
                        <span>Graduation Requirements</span>
                    </div>
                    {progList[0].graduationRequirement.map((rq,ind)=>(
                        <p key={ind}>✔{rq}</p>
                    ))}
                    <div className='mainProgh2'>
                        <span>Programme Duration</span>
                    </div>
                    <p>
                   {progList[0].programDuration}
                    </p>
                    <div className='mainProgh2'>
                        <span>Schedule Of Fees</span>
                    </div>
                    <p>
                    The Programme Duration for UTME Candidfate is 5years while 
                    those who comes in through DE is  4yeras 
                    </p>
                    <div className='mainProgh2'>
                        <span>Courseware/ Course Curriculumn</span>
                    </div>
                    <p>✔Course Curriculum from 100-500level</p>
                  </div>
                )
            )
        }
        
        <Button onClick={()=>{
            navigate(-1)
        }} style={{backgroundColor:'rgba(186, 100, 56, 1)',margin:20}} variant='contained'>Back to Department</Button>
        </StyledContainer>
    )
}
