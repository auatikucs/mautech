import React, { useState } from 'react'
import styled from 'styled-components'
import {useParams} from 'react-router-dom'
import MyLinks from '../components/MyLinks';
const StyledContainer=styled.div`
margin-top: 130px;
padding: 20px;

.faculty-cont{
    min-height: 80vh;
    background-color: white;
    width: 100%;
    display: flex;
    flex-direction: column;

    .mainDean{
    display: flex;
    background-color:transparent;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    flex:2;
    .mainDeanCont{
     display: flex;
     flex-direction: row;
     width: 100%;
     background-color: transparent;
     .deanPersonal{
      width: 30%;
      background-color: transparent;
      display: flex;
      flex-direction: column;
      align-items: center;
      img{
          width: 250px;
          height: 250px;
          border-radius:50%;
      }
     }
     .deanWelcome{
      width: 70%;
      min-height: 100%;
      background-color:transparent;
      p{
          text-align: justify;
          margin-right: 20px;
          margin-left: 20px;
      }
      h3{
          text-align: center;
      }
     }
    }

    }
    .deanStaff{
    display: flex;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    flex: 1;
    justify-content:space-evenly;
    align-items: center;
    .facultyStaff{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex-wrap: nowrap;
    }
    img{
        height: 70px;
        width: 70px;
        border-radius: 50%;
    }


    }
}
.departmentList{
    min-height: 50px;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    background-color: transparent;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
}
@media only screen 
and (min-device-width : 320px) 
and (max-device-width : 480px) {
    margin-top: 100px;
    padding: 0px;
    .departmentList{
        grid-template-columns: 1fr;
        grid-gap: 0px;
    }
    h3{
        margin-left: 0px;
        text-align: center;
    }
    .faculty-cont{
    width: 90%;
    .mainDean{
    display: flex;
    width: 90%;
    .mainDeanCont{
     flex-direction:column;
     .deanPersonal{
      width: 100%;
      background-color: transparent;
      display: flex;
      flex-direction: column;
      align-items: center;
      img{
          width: 250px;
          height: 250px;
          border-radius:50%;
      }
     }
     .deanWelcome{
      width: 100%;
      min-height: 100%;
      background-color:transparent;
      p{
          text-align: justify;
          margin-right: 20px;
          margin-left: 20px;
      }
     }
    }

    }
    .deanStaff{
    display: flex;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    flex-direction:column;
    justify-content: center;
    .facultyStaff{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex-wrap: nowrap;
        margin-bottom: 20px;
        border-bottom: 0.5px solid lightgray;
    }

    }
    }
}
`;
const myData=[
    {
        id:'002',
        facultyName:'Agriculture',
        welcomeMessage:`The School of Agriculture and Agricultural 
        Technology is one of the School of the University. It was 
        established in 1989 and became fully functional in 1990.  
        now has eight departments that award Bachelor of Technology Degree in 
        Agricultural Economics and Extension, Animal Science and Range Management, 
        Crop Production and Horticulture, Crop Protection, Fisheries, Food Science and 
        Technology, Forestry and Wildlife Management and Soil Science. In the eight academic departments, there are 84 academic staff in the following cadre.
        Professors = 14
        Associate Professors = 08
        Senior Lecturers = 23
        Others = 45`,
        welcomeHeading:'Welcome to School of Agriculture and Agricultural Technology',
        deanName:'Prof Ahmad Ahijo',
        deanImage:'https://res.cloudinary.com/nutscoders/image/upload/v1646293738/env_ur7y2b.jpg',
        staffList:[
            {
                name:'Mr. Adamu Kefas',
                position:'CTO Agric department',
                image:'https://res.cloudinary.com/nutscoders/image/upload/v1646293738/env_ur7y2b.jpg'
            },
            {
                name:'Mr. Adamu Kefas',
                position:'CTO Agric department',
                image:'https://res.cloudinary.com/nutscoders/image/upload/v1646293738/env_ur7y2b.jpg'
            },
            {
                name:'Mr. Adamu Kefas',
                position:'CTO Agric department',
                image:'https://res.cloudinary.com/nutscoders/image/upload/v1646293738/env_ur7y2b.jpg'
            },
            {
                name:'Mr. Adamu Kefas',
                position:'CTO Agric department',
                image:'https://res.cloudinary.com/nutscoders/image/upload/v1646293738/env_ur7y2b.jpg'
            }
        ],
        departmentList:['Department  of Fisheries',
        'Department  of Animal Science and Range Management',
        'Department  of Crop Production',
        'Department  of Food Science and Technology',
        'Department  of Agricultural Economics and Extension',
        'Department  of Crop Production and Horticulture',
        'Department  of Social Science '
                     ]
    }
]
export default function DetailScreen() {
    const {id}=useParams()
    const filteredArray=myData.filter(data=>data.id==id)
    console.log(filteredArray)
    useState(()=>{
        window.scrollTo({
            top:0,
            behavior: 'smooth',
          })
          console.log(id)
    },[])
    return (
        <StyledContainer>
            <div className='faculty-cont'>
             <div className='mainDean'>
                 <div className='mainDeanCont'>
                     <div className='deanPersonal'>
                     <h3>Faculty Of {filteredArray[0].facultyName} </h3>
                         <img src={filteredArray[0].deanImage}/>
                         <h4>{filteredArray[0].deanName}</h4>
                         <p>Dean Faculty Of {filteredArray[0].facultyName}</p>
                     </div>
                     <div className='deanWelcome'>
                         <h3>{filteredArray[0].welcomeHeading}</h3>
                         <p>{filteredArray[0].welcomeMessage}</p>
                     </div>
                 </div>
             </div>
             <h3 style={{
                 textAlign:'center',
                 color:'#D07348'
             }}>Faculty Staff</h3>
             <div className='deanStaff'>
              {
                  filteredArray[0].staffList.map(staf=>(
                      <div key={staf.name} className='facultyStaff'>
                        <img src={staf.image}/>
                       <h4>{staf.name}</h4>
                       <p>{staf.position}</p>
                      </div>
                  ))
              }
             </div>
             <h3 style={{
                 textAlign:'center',
                 color:'#D07348'
             }}>List Of Departments</h3>
             <div className='departmentList'>
             {
                 filteredArray[0].departmentList.map(dep=>(
                     <MyLinks key={dep} link={dep}/>
                 ))
             }
             </div>
            </div>
        </StyledContainer>
    )
}
