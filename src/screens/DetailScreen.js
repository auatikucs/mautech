import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import {useParams} from 'react-router-dom'
import MyLinks from '../components/MyLinks';
import { Skeleton } from '@mui/material';
import AppContext from '../Context/app/appContext';
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
     min-height: 50vh;
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

export default function DetailScreen() {
    const {id}=useParams()
    const [myId,setMyid]=useState()
    const [loading,setLoading]=useState(false)
    const myAppParam=useContext(AppContext)

    const loadData=()=>{
        setLoading(true)
        fetch(`https://new-modibbo-adama.herokuapp.com/admin/get-single-faculty?facultyId=${id}`)
        .then(res => {
            res.json()
                .then(data => {
                    setLoading(false)
                  
                   
                })
        }).catch(err=>{
            setLoading(false)
        })
    }

    useState(()=>{
        window.scrollTo({
            top:0,
            behavior: 'smooth',
          })
        //   loadData()
        
         
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
               myAppParam.triger.length>0&&(
                <div className='faculty-cont'>
                <div className='mainDean'>
                    <div className='mainDeanCont'>
                        <div className='deanPersonal'>
                        <h3>{myAppParam.triger[0].facultyName} </h3>
                          {
                              myAppParam.triger[0].dean==null&&(
                                  <>
                                  <h3>No Dean Data!!</h3>
                                  <p>Contact the admin for complaints!</p>
                                  </>
                              )
                          }
                          {
                             !myAppParam.triger[0].dean==null&&(
                           <>
                            <img src={myAppParam.triger[0].dean.image}/>
                            <h4>{myAppParam.triger[0].dean.name}</h4>
                            <p>Dean Faculty Of {myAppParam.triger[0].facultyName}</p>
                            </>
                            ) 
                          }
                            
                        </div>
                        <div className='deanWelcome'>
                            <h3>{myAppParam.triger[0].shortNote}</h3>
                            <p>{myAppParam.triger[0].facultyDescription}</p>
                        </div>
                    </div>
                </div>
             
                <h3 style={{
                    textAlign:'center',
                    color:'#D07348'
                }}>List Of Departments</h3>
                <div className='departmentList'>
                {
                    myAppParam.triger[0].departmentList.map(dep=>(
                        <MyLinks route={`/course/${dep.departmentId}`} key={dep.departmentId} link={dep.departmentName}/>
                    ))
                }
                </div>
               </div>
               )
           }

           {
               !loading&&myAppParam.triger.length==0&&(
                   <h3>No Data For This Faculty Yet!!!</h3>
               )
           }
            
        </StyledContainer>
    )
}









