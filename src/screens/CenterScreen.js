import { Button } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import EmptyIcon from '@mui/icons-material/HourglassEmpty'
import MyDepList from '../components/MyDepList';
import MyAccordion from '../components/MyAccordion';
import AppContext from '../Context/app/appContext';
import Bg from '../assets/domy.jpeg'
import Car2 from '../assets/car2.jpg'
import { Link,useNavigate, useParams} from 'react-router-dom';
import Wave from 'react-wavify'
import DepLink from '../components/DepLink';

const StyledContainer=styled.div`
margin-top: 110px;
min-height: 50vh;
width: 100%;
background-color: white;
margin-bottom: 30px;
overflow:hidden;
.emptyList{
    min-height: 50vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
h5{
    width: 70%;
    margin-right: auto;
    margin-left: auto;
    color: white;
    background-color:rgb(66, 186, 150);
    text-align: center;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.5);

}
.depTerms{
    width: 95%;
    margin-right: auto;
    margin-left: auto;
    margin-top: 20px;
    display: flex;
    img{
        width: 40%;  
    }
    .mainReq{
        width: 60%;
        margin-right: auto;
    margin-left: auto;
    display: flex;
    flex-direction: column;
    h4{
        text-align: center;

    }
    p{
        text-align: justify;
    }

    }
}
.hodDetails{
    display:flex;
    flex-direction: row;
    width: 95%;
    margin-right: auto;
    margin-left: auto;
    margin-top: 20px;
    min-height: 70vh;
    .hodImage{
        height: 460px;
        width: 462;
        background-color:white;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        border: 1px solid rgba(217, 217, 217, 1);
       
        img{
            height:370px;
            width: 430px;
           
        }
        span{
            border-bottom: 1px solid rgba(217, 217, 217, 1);
            width: 100%;
            text-align: center;
            font-weight: bold;
            height: 30px;
            font-size: 20px;
            
        }
        span.linkVie{
            color: blue;
            font-size: 14px;
            border-bottom:none;
        }
    }
    .depMission{
        flex: 1;
        background-color: white;
        position: relative;
        justify-content:center;
        align-items:center;
        .myBtn{
            display: flex;
            justify-content: space-around;
        }
        h4{
            width: 100%;
            text-align: center;
        }
        p{
            width: 80%;
            text-align: justify;
            margin-left: auto;
            margin-right: auto;
            font-size:20px;
            
        }
       
    }

}
.depHead{
    width: 100%;
    min-height: 230px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color:white;
    text-transform: uppercase;
    font-weight: bolder;
    background:linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('https://res.cloudinary.com/nutscoders/image/upload/v1646557952/IMG_9585_mpdo2q.jpg');
   background-repeat:no-repeat;
   background-size: cover;
  background-position: center;
    
}


.depVisonMision{
    min-height:240px;
    width: 98%;
    margin-left: auto;
    margin-right: auto;
    background-color:rgba(226, 223, 214, 0.5);
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    position: relative;
    
    .depVis{
        width: 45%;
        display: flex;
        flex-direction:column;
        align-items:center;
        padding: 10px;
        z-index: 100;
        
        h1{
            text-align: center;
            color: rgba(160, 50, 50, 1);
        }
        p{
            text-align: justify;
            margin-left: 10px;
            margin-right: 10px;
        }
    }
    .wavy{
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background-color: transparent;
            z-index: 20;
        }
}

.depProg{
    margin-top: 20px;
    margin-bottom:20px;
    .progLIst{
        display:grid;
        grid-template-columns:1fr 1fr 1fr;
        grid-gap:10px;
        width:80%;
        margin-left:auto;
        margin-right:auto;
    }
}
.depStaff{
    min-height: 300px;
    width: 100%;
    display: grid;
    padding: 5px;
    grid-gap: 5px;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 20px;
    .depIndStaff{
     height:120px;
     width: 80%;
     background-color: white;
     box-shadow: 0px 0px 1px rgba(0,0,0,0.5);
     display: flex;
     flex-direction: row;
     align-items: center;
     margin-top: 20px;
     cursor: pointer;
    
     h4,p{
         text-align: center;
     }
     .stfDepCon{
         flex: 1;
         margin-left: 10px;
         display: flex;
         flex-direction: column;
         span{
             text-align: center;
         }
         .stfH{
             font-size: 20px;
             color: rgba(160, 50, 50, 1);
             font-weight: bold;
         }
     }
     img{
         width: 100px;
         height:100px;
         border-radius: 100%;
         margin-left: 5px;
     }

    }
}


@media only screen 
and (max-width : 1060px) 
{
    .hodDetails{
    display:flex;
    flex-direction:column;
    width: 95%;
   
    .hodImage{
        height: 620px;
        width: 100%;
        background-color:white;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        border: 1px solid rgba(217, 217, 217, 1);
       
        img{
            height:520px;
            width: 100%;
           
        }
        span{
            border-bottom: 1px solid rgba(217, 217, 217, 1);
            width: 100%;
            text-align: center;
            font-weight: bold;
            height: 30px;
            font-size: 20px;
            
        }
        span.linkVie{
            color: blue;
            font-size: 14px;
            border-bottom:none;
        }
    }
    .depMission{
        flex: 1;
        background-color: white;
        position: relative;
        justify-content:center;
        align-items:center;
        .myBtn{
            display: flex;
            justify-content: space-around;
        }
        h4{
            width: 100%;
            text-align: center;
        }
        p{
            width: 100%;
            text-align: justify;
            margin-left: auto;
            margin-right: auto;
            font-size:14px;
            
        }
       
    }

}   
.depStaff{
    min-height: 300px;
    width: 100%;
    display: grid;
    padding: 0px;
    grid-gap: 5px;
    grid-template-columns: 1fr 1fr;
    padding: 10px;
    .depIndStaff{
     height:120px;
     width: 80%;
     background-color: white;
     box-shadow: 0px 0px 1px rgba(0,0,0,0.5);
     display: flex;
     flex-direction: row;
     align-items: center;
     margin-top: 20px;
     cursor: pointer;
    
     h4,p{
         text-align: center;
     }
     .stfDepCon{
         flex: 1;
         margin-left: 10px;
         display: flex;
         flex-direction: column;
         span{
             text-align: center;
         }
         .stfH{
             font-size: 20px;
             color: rgba(160, 50, 50, 1);
             font-weight: bold;
         }
     }
     img{
         width: 100px;
         height:100px;
         border-radius: 100%;
         margin-left: 5px;
     }

    }
}
}











@media only screen 
and (min-device-width : 320px) 
and (max-device-width : 480px) {
    margin-top:100px;
    .depHead{
    min-height:100px;
    
    }
    .hodDetails{
    display:flex;
    flex-direction:column;
    width: 95%;
   
    .hodImage{
        height: 480px;
        width: 100%;
        background-color:white;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        border: 1px solid rgba(217, 217, 217, 1);
       
        img{
            height:380px;
            width: 100%;
           
        }
        span{
            border-bottom: 1px solid rgba(217, 217, 217, 1);
            width: 100%;
            text-align: center;
            font-weight: bold;
            height: 30px;
            font-size: 20px;
            
        }
        span.linkVie{
            color: blue;
            font-size: 14px;
            border-bottom:none;
        }
    }
    .depMission{
        flex: 1;
        background-color: white;
        position: relative;
        justify-content:center;
        align-items:center;
        .myBtn{
            display: flex;
            justify-content: space-around;
        }
        h4{
            width: 100%;
            text-align: center;
        }
        p{
            width: 100%;
            text-align: justify;
            margin-left: auto;
            margin-right: auto;
            font-size:14px;
            
        }
       
    }

} 

.depVisonMision{
    min-height:240px;
    width: 98%;
    margin-left: auto;
    margin-right: auto;
    background-color:rgba(226, 223, 214, 0.5);
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    position: relative;
    
    .depVis{
        width: 100%;
        display: flex;
        flex-direction:column;
        align-items:center;
        padding:0px;
        z-index: 100;
        
        h1{
            text-align: center;
            color: rgba(160, 50, 50, 1);
        }
        p{
            text-align: justify;
            margin-left: 10px;
            margin-right: 10px;
        }
    }
    .wavy{
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background-color: transparent;
            z-index: 20;
        }
}
.depProg{
    margin-top: 20px;
    margin-bottom:20px;
    .progLIst{
        display:grid;
        grid-template-columns:1fr;
        grid-gap:0px;
        width:90%;
        margin-left:auto;
        margin-right:auto;
    }
}
.depStaff{
    min-height: 300px;
    width: 100%;
    display: grid;
    padding: 0px;
    grid-gap: 0px;
    grid-template-columns:1fr;
    padding: 10px;
    .depIndStaff{
     height:120px;
     width: 90%;
     background-color: white;
     box-shadow: 0px 0px 1px rgba(0,0,0,0.5);
     display: flex;
     flex-direction: row;
     align-items: center;
     margin-top: 20px;
     cursor: pointer;
    
     h4,p{
         text-align: center;
     }
     .stfDepCon{
         flex: 1;
         margin-left: 10px;
         display: flex;
         flex-direction: column;
         span{
             text-align: center;
         }
         .stfH{
             font-size: 20px;
             color: rgba(160, 50, 50, 1);
             font-weight: bold;
         }
     }
     img{
         width: 100px;
         height:100px;
         border-radius: 100%;
         margin-left: 5px;
     }

    }
}
}




`;

export default function CenterScreen() {
    const [department,setDep]=useState([])
    const navigate=useNavigate()
    const [loading,setLoading]=useState(false)
    const {id}=useParams()
    const activity='center'
    const loadData=(id)=>{
   
        fetch(`https://mau-web-server.fly.dev/admin/get-single-faculty?eventId=${id}&activity=${activity}&target=centerId`)
        .then(res => {
            res.json()
                .then(data => {
                console.log(data,'+++++++')
                  setDep([data.message])
                  setLoading(false)
                
                })
        }).catch(err=>{
            
        })
    }
    useEffect(()=>{
        window.scrollTo({
            top:0,
            behavior: 'smooth',
          })
         
        loadData(id)
       
    },[])
    return (
        <StyledContainer>
           {
    department.length>0&&(
        <>
        <div className='depHead'>
 <h2 style={{color:'white'}} className='depHeading'>{department[0].centerName}</h2>
</div>
<div className='hodDetails'>
    {
        department[0].dean!=null&&(
        <div className='hodImage'>
            <img src={`${department[0].dean.image}`} alt='HOD'/> 
            <span style={{color:'black'}}>{department[0].dean.name}</span>
            <span style={{color:'black'}}>Head Of Department</span>
            <span className='linkVie'>{department[0].dean.mail}</span>
            {/* <h4>STAFF LIST</h4>
            {
                department[0].staffList.length>0&&(
                    department[0].staffList.map(stf=>(
                        <MyAccordion key={stf.name} title={stf.name} qualification={stf.qualification.map(ql=>ql+', ')} topic={stf.major}/>
                    ))
                )
            } */}
            
           
        </div>
        )
    }

 <div className='depMission'>
   <h4>Welcome To {department[0].centerName}</h4>
     <p style={{color:'black'}}>{department[0].centerDescription}</p>
     {/* {
         department[0].programs.length>0&&(
            department[0].programs.map(prg=>(
                <MyDepList key={prg.name} list={prg.admissionRequirement} title={prg.name} content={prg.mission} requirements=''/>
            ))
         )
     } */}

    
   
 </div>
</div>



        </>
    )
}
{
    department.length==0&&(
        <div className='emptyList'>
            <EmptyIcon style={{
        width: 50,
        height:50
    }}/>
    <h4>Department Data Not Added Yet!!!</h4>
        </div>
    )
}


{
     department.length>0&&(
         <>
 <div className='depVisonMision'>
<div className='wavy'>
<Wave fill='#e2dfd6'
        paused={false}
        options={{
          height: 20,
          amplitude: 20,
          speed: 0.15,
          points: 3
        }}
  />
</div>
<div className='depVis'>
    <h1>VISION</h1>
    <p>
    {department[0].vission}
    </p>
</div>


<div className='depVis'>
    <h1>MISSION</h1>
    <p>
    {department[0].mission}
    </p>
</div>
</div>

<div className='depProg'>
<h1>Programmes</h1>
<div className='progLIst'>
{
     department[0].programList.length>0&&(
        department[0].programList.map(prg=>(
            <DepLink route={`/program/${prg.programId}/${department[0].departmentName}/${activity}`} key={prg.name} link={`${prg.honor} ${prg.name}`} id={prg.name}/>
        ))
     )
}
</div>
</div>
{/* <h1 style={{marginTop:'10px'}}>Staff</h1>
<div className='depStaff'>
{
                department[0].staffList.length>0&&(
                    department[0].staffList.map(stf=>(
               
                 <div onClick={()=>{
                    if (stf.email=='') {
                    return
                    }
                    window.open(`${stf.email}`, '_blank');
                 }} className='depIndStaff'>
                        <img src={Bg} />
                        <div className='stfDepCon'>
                        <span className='stfH'>{stf.name}</span>
                        <span>{stf.rank}</span>
                        <span>{stf.major}</span>
                        </div>
                    </div>
                 
                    
                    ))
                )
   } 
    

   
</div> */}
         </>
     )
}

</StyledContainer>


    )
}


