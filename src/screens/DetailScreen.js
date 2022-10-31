import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import {useParams} from 'react-router-dom'
import MyLinks from '../components/MyLinks';
import { Skeleton } from '@mui/material';
import AppContext from '../Context/app/appContext';
import DepLink from '../components/DepLink';
import Bg from '../assets/car2.jpg'
const StyledContainer=styled.div`
margin-top: 90px;


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
     display:flex;
     flex-direction: row;
     margin-top: 20px;
     width: 100%;
     background-color: transparent;
     min-height: 50vh;
     .deanPersonal{
      width:450px;
      background-color: transparent;
      display: flex;
      flex-direction: column;
      align-items: center;
      .myDean{
          height: 450px;
          width: 425px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          .myDeanCont{
          height: 100px;
          width: 100%;
          background-color: rgba(0,0,0,0.7);
          display:flex;
          flex-direction:column;
          justify-content:center;
          align-items:center;
          span{
              color: white;
              text-align: center;
              font-weight:bold;
              width:100%;
          }
        .d3{
           font-size:20px;
          }
          }
      }
     }
     .deanWelcome{
      flex: 1;
      min-height: 100%;
      background-color:transparent;
      display:flex;
      justify-content:center;
      align-items:center;
      p{
          text-align: justify;
          margin-right: 20px;
          margin-left: 20px;
          font-size:20px;
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

.fac-head{
    min-width:100%;
    height: 500px;
    display:flex;
    flex-direction: column;
    justify-content: flex-end;
    /* padding: 20px; */
   
    h1{
        color: white;
        font-size:60px;
    }
    p{
        color: white;
        width: 60%;
        text-align: justify;
        font-weight: 700px;
    }

}
`;

export default function DetailScreen() {
    const {id,activity}=useParams()
    const [myId,setMyid]=useState()
    const [loading,setLoading]=useState(true)
    const [triger,setTriger]=useState([])

    const loadData=()=>{
        fetch(`https://new-modibbo-adama.herokuapp.com/admin/get-single-faculty?eventId=${id}&activity=${activity}&target=${activity}Id`)
        .then(res => {
            res.json()
                .then(data => {
                  setTriger([data.message])
                  setLoading(false)
                  console.log(data,activity)
                })
        }).catch(err=>{
            
        })
    }
    useEffect(()=>{
        window.scrollTo({
            top:0,
            behavior: 'smooth',
          })
         
        loadData()
         console.log("___")
    },[])
    return (
        <StyledContainer>
           {
               loading&&(
                   <>
                <Skeleton style={{
                marginLeft:'auto',
                marginRight:'auto'
            }}  variant="circular" width={40} height={40} />
            <Skeleton variant="rectangular" style={{
                width:'80%',
                marginLeft:'auto',
                marginRight:'auto'
            }} height={118} />
                   </>
               )
           }

           {
               !loading&&
               triger.length>0&&(
                <>
                 <div style={{
                     background:`linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${triger[0].image==null?Bg:triger[0].image})`,
                     backgroundRepeat:'no-repeat',
                     backgroundSize:'cover',
                     backgroundPosition:'center'
                     
                 }} className='fac-head'>
                   <h1>{triger[0][`${activity}Name`]}</h1>
                   {/* <p>{triger[0].facultyDescription}</p> */}
                </div>
                <div className='faculty-cont'>
                <div className='mainDean'>
                    <div className='mainDeanCont'>
                        <div className='deanPersonal'>
                          {
                              triger[0].dean==null&&(
                                  <>
                                  <h3>No Dean Data!!</h3>
                                  <p>Contact the admin for complaints!</p>
                                  </>
                              )
                          }
                          {
                             triger[0].dean!==null&&(
                           <>
                           <div style={{
                     background:`url(${triger[0].dean.image==null?Bg:triger[0].dean.image})`,
                     backgroundRepeat:'no-repeat',
                     backgroundSize:'cover',
                     backgroundPosition:'center'
                     
                 }} className='myDean'>
                         <div className='myDeanCont'>
                         <span className='1'>{triger[0].dean.name}</span>
                         <span className='2'>{triger[0].dean.mail}</span>
                         <span className='d3'>Dean {triger[0][`${activity}Name`]}</span>
                         </div>
                           </div>
                            </>
                            ) 
                          }
                            
                        </div>
                        <div className='deanWelcome'>
                            <h3 style={{color:'black'}}>Dean's welcome message</h3>
                            <p>{triger[0][`${activity}Description`]} </p>
                        </div>
                    </div>
                </div>
             
                <h3 style={{
                    textAlign:'center',
                    color:'#D07348'
                }}>Departments</h3>
                <div className='departmentList'>
                {
                    triger[0][activity=='center'?'programList':'departmentList'].map(dep=>(
                        <DepLink route={`/course/${dep.departmentId}/${activity}`} key={dep.departmentId} link={dep.departmentName} id={dep.departmentId}/>
                    ))
                }
                </div>
               </div>
               </>
               )
           }

           {
               !loading&&triger.length==0&&(
                   <h3>No Data For This Faculty Yet!!!</h3>
               )
           }
            
        </StyledContainer>
       
        
    )
}









