import React, { useContext, useState } from 'react'
import { useEffect } from 'react';
import styled from 'styled-components'
import { useNavigate,useParams } from "react-router-dom";
import MyCard from '../sub-components/MyCard'
import MyLinks from '../components/MyLinks';
import AppContext from '../Context/app/appContext';
import Img from '../assets/mau_cover.jpg'
import { Box, Button } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
const StyledContainer=styled.div`
width: 100%;
min-height: 60vh;
margin-top: 110px;
.programHead{
    min-height: 40vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    .progCoverHead{
    height:70px;
    background-color: rgba(0, 0, 0, 0.7);
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
    background-color:white;
    .mainProgh2{
        height: 50px;
        border-bottom: 1px solid rgba(208, 115, 72, 1);
        span{
            color: rgba(208, 115, 72, 1);
            font-size: 31px;
        }
    }
    .rq{
    display:flex;
    flex-direction:column;
    justify-content:center;
    
    span{
        font-size:20px;
        font-weight:bold;

    }
    p{
       margin-left:10px;
    }
}
    /* p{
        text-align: justify;
        
    } */
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
.btnSelect{
    width: 200px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 20px;
}
.prgmainRe{
    width: 100%;
    background-color:white;
    margin-top: 20px;
}
`;

  
export default function ProgramDetailScreen() {
    const [progList,setList]=useState([])
    const [loading,setLoading]=useState(false)
    const {id,department,activity}=useParams()
    const [value, setValue] = React.useState(0);
    const [active,setActive]=useState(0)

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    const navigate=useNavigate()
    const loadData=(id)=>{
        setLoading(true)
        fetch(`https://new-modibbo-adama.herokuapp.com/admin/get-single-program?programId=${id}&activity=${activity}`)
        .then(res => {
            res.json()
                .then(data => {
                    setLoading(false)
                    console.log(data,"++++")
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
           <h3>{progList[0].honor} {progList[0].name}</h3>
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
            

                  
            <div className='prgmainRe'>
            {progList[0].admissionRequirement.map((rq,ind)=>{
                if (rq.content==null) {
                    return null
                }
                return(
                    <div className='rq' key={ind}>
                     <span>{rq.header.split('admissionRequirement')[1].toUpperCase()}</span>
                     <p>{rq.content}</p>
                    </div>
                    
                )
               }
                    )}
            </div>
                 <div className='mainProgh2'>
                        <span>Graduation Requirements</span>
                    </div>
                    {progList[0].graduationRequirement.map((rq,ind)=>(
                        <>
                        <p key={ind}>{rq} <a href='#'>View Curriculum</a></p>
                        </>
                    ))} 
          
                    
                    <div className='mainProgh2'>
                        <span>Careeer Prospects</span>
                    </div>
                    <p>
                   {
                       progList[0].careerProspect
                   }
                    </p>
                   
                   
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
