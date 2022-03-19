import React, { useState } from 'react'
import { useEffect } from 'react';
import styled from 'styled-components'
import { useNavigate,useParams } from "react-router-dom";
import MyCard from '../sub-components/MyCard'
import MyLinks from '../components/MyLinks';
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
        loadData()
    },[])

    return (
        <StyledContainer>
            {/* <div style={{
                backgroundImage:`url(${require('../assets/und.jpg')})`
            }} className='pr-detail'>
            <div className='first-wave'>
                <div className='second-wave'>
                    <h1>
                    .Undergraduate
                    </h1>
                    <h1>.Postgraduate</h1>
                    <h1>.Sandwitch/Diploma</h1>
                    <h1>PROGRAMS</h1>
                    <p>
                    Explore our 60-plus majors, and get ready to reach your full potential 
                    </p>
                </div>
            </div>
            </div> */}

            {/* <div className='sch-list'> */}
              {/* <MyCard
              link='/department/008'
              header='Faculty Of Medical Sciences'
              content={`Change lives with a honorary degree from one of MAU's top Medical  school courses.`}
              image='https://res.cloudinary.com/nutscoders/image/upload/v1646291142/med2_baw25e.jpg'
              />

           <MyCard
               link='/department/004'
              header='Faculty Of Life Sciences'
              content={`There are obvious practical reasons that the life sciences are valuable. The study of the life sciences lends important insights into disease processes`}
              image='https://res.cloudinary.com/nutscoders/image/upload/v1646293244/lifes_xkclfa.jpg'
              />
              <MyCard
               link='/department/005'
              header='Faculty Of Physical Sciences'
              content={`
              The intellect can be developed through studying science. Apart from the development of the intellect.`}
              image='https://res.cloudinary.com/nutscoders/image/upload/v1646293491/cs_n0t91f.jpg'
              />

       <MyCard
               link='/department/006'
              header='Faculty Of Enviromental Sciences'
              content={`Environmental science enlightens us on how to conserve our environment in the face of increasing human population growth and other activities.`}
              image='https://res.cloudinary.com/nutscoders/image/upload/v1646293738/env_ur7y2b.jpg'
              />
        <MyCard
              link='/department/003'
              header='Faculty Of Engineering'
              content={`Engineers secure the faith of growing economy. Engineering plays such an important role because it is the way that we humans are able to use the rules of the world to achieve things.`}
              image='https://res.cloudinary.com/nutscoders/image/upload/v1646294226/eng_itlord.jpg'
              />
         <MyCard
              link='/department/002'
              header='Faculty Of Agriculture'
              content={`If you want to study Agriculture, you will deal with agricultural processes and their conditions.`}
              image='https://res.cloudinary.com/nutscoders/image/upload/v1646295371/farm_nmxw3l.jpg'
              />
           <MyCard
               link='/department/001'
              header='Faculty Of Social Sciences'
              content={`Social science is able to provide insight into how science and innovation work – in effect it is the science of science.`}
              image='https://res.cloudinary.com/nutscoders/image/upload/v1646295632/soci_ewy2ia.jpg'
              />

         <MyCard
               link='/department/007'
              header='Faculty Of Education'
              content={`The Faculty prepares professional teachers/leaders in teacher education and researchers.`}
              image='https://res.cloudinary.com/nutscoders/image/upload/v1646295893/eduu_p2m3j7.jpg'
              /> */}
        
            {/* </div> */}

            {   
                !loading&&
                facList.length>0&&(
                    facList.map((fac,ind)=>(
                        <MyLinks key={ind} route={`/department/${fac.facultyId}`} link={fac.facultyName}/>
                    ))
                )
            }
            
        </StyledContainer>
    )
}
