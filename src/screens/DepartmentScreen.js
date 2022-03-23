import { Button } from '@mui/material';
import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router';
import styled from 'styled-components'
import EmptyIcon from '@mui/icons-material/HourglassEmpty'
import MyDepList from '../components/MyDepList';
import MyAccordion from '../components/MyAccordion';
import AppContext from '../Context/app/appContext';

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
    .hodImage{
        min-height: 400px;
        width: 40%;
        background-color:white;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        img{
            height:250px;
            width: 250px;
            border-radius: 50%;
        }
    }
    .depMission{
        width: 70%;
        background-color: #f9f9f9;
        .myBtn{
            display: flex;
            justify-content: space-around;
        }
        h4{
            width: 80%;
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
    min-height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color:white;
    text-transform: uppercase;
    font-weight: bolder;
    background:linear-gradient(to bottom,rgba(208, 115, 72,1),rgba(208, 115, 72,1),rgba(208, 115, 72, 0.5));
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
`;

export default function DepartmentScreen() {
    const myAppParam=useContext(AppContext)
    useEffect(()=>{
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
 <h2>{myAppParam.department[0].departmentName} Department</h2>
</div>
<div className='hodDetails'>
    {
        myAppParam.department[0].hod!=null&&(
        <div className='hodImage'>
            <img src={myAppParam.department[0].hod.image}/>
            <h3>{myAppParam.department[0].hod.name}</h3>
            <h4>{myAppParam.department[0].hod.qualification.map(ql=>ql+', ')}</h4>
            <p>(Head Of Department)</p>
            <h4>STAFF LIST</h4>
            {
                myAppParam.department[0].staffList.length>0&&(
                    myAppParam.department[0].staffList.map(stf=>(
                        <MyAccordion key={stf.name} title={stf.name} qualification={stf.qualification.map(ql=>ql+', ')} topic={stf.major}/>
                    ))
                )
            }
            
           
        </div>
        )
    }
 
 <div className='depMission'>
   
     <p>{myAppParam.department[0].vission}</p>
     {
         myAppParam.department[0].programs.length>0&&(
            myAppParam.department[0].programs.map(prg=>(
                <MyDepList key={prg.name} list={prg.admissionRequirement} title={prg.name} content={prg.mission} requirements=''/>
            ))
         )
     }

    
   
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




        </StyledContainer>
    )
}


