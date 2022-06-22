import React, { useContext, useState } from 'react'
import { useEffect } from 'react';
import styled from 'styled-components'
import { useNavigate,useParams } from "react-router-dom";
import MyCard from '../sub-components/MyCard'
import MyLinks from '../components/MyLinks';
import AppContext from '../Context/app/appContext';
const StyledContainer=styled.div`
width: 100%;
min-height: 60vh;
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

.sch-list{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: 50px;
    margin-bottom: 30px;
    padding: 10px;
    justify-content: center;
    align-items: center;
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
    const [facList,setList]=useState([])
    const [loading,setLoading]=useState(false)
  

    const loadData=()=>{
        setLoading(true)
        fetch('https://new-modibbo-adama.herokuapp.com/admin/get-all-faculties')
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
        // loadData()
    },[])

    return (
        <StyledContainer>
         <h1>prohgggggg</h1>
            {/* {   
                !loading&&
                facList.length>0&&(
                    facList.map((fac,ind)=>(
                        <MyLinks id={fac.facultyId} key={ind} route={`/department/${fac.facultyId}`} link={fac.facultyName}/>
                    ))
                )
            } */}
            
        </StyledContainer>
    )
}
