import { Button } from '@mui/material';
import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import EmptyIcon from '@mui/icons-material/HourglassEmpty'
import MyDepList from '../components/MyDepList';
import MyAccordion from '../components/MyAccordion';
import AppContext from '../Context/app/appContext';
import Bg from '../assets/car3.jpg'
import { Link,useNavigate} from 'react-router-dom';

const StyledContainer=styled.div`
margin-top: 130px;
min-height: 50vh;
width: 100%;
background-color: white;
margin-bottom: 30px;
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
        height: 442px;
        width: 462;
        background-color:white;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        border: 1px solid rgba(217, 217, 217, 1);
        img{
            height:330px;
            width: 430px;
           
        }
        h3,h4{
            border-bottom: 1px solid rgba(217, 217, 217, 1);
            width: 100%;
            text-align: center;
        }
    }
    .depMission{
        flex: 1;
        background-color: white;
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
    background:linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${Bg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}


@media only screen 
and (min-device-width : 320px) 
and (max-device-width : 480px) {
    margin-top: 100px;
margin-bottom: 30px;
h5{
    width: 90%;

}
.depTerms{
    width: 100%;
    flex-direction: column;
    img{
        width: 100%;  
    }
    .mainReq{
        width: 90%;
    h4{
        text-align: center;

    }
    p{
        text-align: justify;
    }

    }
}
.hodDetails{
    flex-direction:column;
 
    .hodImage{
        width: 100%;

    }
    .depMission{
        width: 100%;
        h4{
            width: 100%;
          
        }
        p{
            width: 95%;
            
            
        }
    }

}
.depHead{
   h2{
       text-align: center;
   }
}


}

.depVisonMision{
    height:220px;
    width: 98%;
    margin-left: auto;
    margin-right: auto;
    background-color:rgba(226, 223, 214, 1);
    display: flex;
    flex-direction: row;
    
    .depVis{
        width: 45%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 20px;
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
}

.depProg{
    margin-top: 20px;
}
.depStaff{
    min-height: 300px;
    width: 100%;
    display: grid;
    padding: 5px;
    grid-gap: 5px;
    grid-template-columns: 1fr 1fr 1fr;
    .depIndStaff{
     height:156px;
     width: 100%;
     background-color: white;
     box-shadow: 0px 0px 1px rgba(0,0,0,0.5);
     display: flex;
     flex-direction: row;
     align-items: center;
     margin-top: 20px;
     cursor: pointer;
     .stfDepCon{
         flex: 1;
         margin-left: 10px;
     }
     img{
         width: 134px;
         height:134px;
         border-radius: 100%;
     }

    }
}
`;

export default function DepartmentScreen() {
    const myAppParam=useContext(AppContext)
    const navigate=useNavigate()
    useEffect(()=>{
    console.log(myAppParam)
        window.scrollTo({
            top:0,
            behavior: 'smooth',
          })
    },[])
    return (
        <StyledContainer>
           {
    myAppParam.department.length>0&&(
        <>
        <div className='depHead'>
 <h2>{myAppParam.department[0].departmentName}</h2>
</div>
<div className='hodDetails'>
    {
        myAppParam.department[0].hod!=null&&(
        <div className='hodImage'>
            <img src={`${myAppParam.department[0].hod.image}`} alt='HOD'/> 
            <h3>{myAppParam.department[0].hod.name}</h3>
            <h4>Head Of Department</h4>
            {/* <h4>STAFF LIST</h4>
            {
                myAppParam.department[0].staffList.length>0&&(
                    myAppParam.department[0].staffList.map(stf=>(
                        <MyAccordion key={stf.name} title={stf.name} qualification={stf.qualification.map(ql=>ql+', ')} topic={stf.major}/>
                    ))
                )
            } */}
            
           
        </div>
        )
    }
 
 <div className='depMission'>
   <h4>Welcome To {myAppParam.department[0].departmentName}</h4>
     <p>{myAppParam.department[0].vission}</p>
     {/* {
         myAppParam.department[0].programs.length>0&&(
            myAppParam.department[0].programs.map(prg=>(
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
    myAppParam.department.length==0&&(
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
     myAppParam.department.length!==0&&(
         <>
         <div className='depVisonMision'>
<div className='depVis'>
    <h1>VISION</h1>
    <p>
    The vision of the department is to produce world class computer 
    scientists that are in tune with the latest technologies and that can use their skills in 
    finding solutions to real world problems for the benefit of mankind.
    </p>
</div>


<div className='depVis'>
    <h1>MISSION</h1>
    <p>
    The vision of the department is to produce world class computer 
    scientists that are in tune with the latest technologies and that can use their skills in 
    finding solutions to real world problems for the benefit of mankind.
    </p>
</div>
</div>

<div className='depProg'>
<h1>Programmes</h1>
<ul>
{
     myAppParam.department[0].programs.length>0&&(
        myAppParam.department[0].programs.map(prg=>(
          <li key={prg.name}>
              <Link to='/'>{prg.name}</Link>
          </li> 
        ))
     )
}
</ul>
</div>
<h1 style={{marginTop:'100px'}}>Departmental Staff Profile List</h1>
<div className='depStaff'>
{
                myAppParam.department[0].staffList.length>0&&(
                    myAppParam.department[0].staffList.map(stf=>(
                
                 <div onClick={()=>{
                   navigate('/staff/01')
                 }} className='depIndStaff'>
                        <img src={Bg} />
                        <div className='stfDepCon'>
                        <h2>{stf.name}</h2>
                        <h4>{stf.major}</h4>
                        <p>{stf.qualification[0]}</p>
                        </div>
                    </div>
                    
                    ))
                )
   } 
    

   
</div>
         </>
     )
}


        </StyledContainer>
  

    )
}


