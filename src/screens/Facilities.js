import { Button, Divider, List, ListItemButton, ListItemText } from '@mui/material';
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
import Carousel from 'react-material-ui-carousel'

const StyledContainer=styled.div`
margin-top: 110px;
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
        height: 400px;
        width: 462;
        background-color:white;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        border: 1px solid rgba(217, 217, 217, 1);
        position:relative ;
        .dirName{
        position: absolute;
        bottom:0;
        width:100%;
        min-height:70px;
        background-color:rgba(255,255,255,0.8);
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        }
        img{
            height:400px;
            width: 430px;
           
        }
        span.dirMain{
            width: 100%;
            text-align: center;
            font-weight: bold;
            font-size: 20px;
            
        }
       
    }
    .depMission{
        flex: 1;
        background-color: white;
        position: relative;
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
    min-height:70vh;
    display: flex;
    flex-direction: column;
    justify-content:flex-end;
    color:white;
    text-transform: uppercase;
    font-weight: bolder;
    background:linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('https://res.cloudinary.com/nutscoders/image/upload/v1657144990/cent_klm13k.png');
   background-repeat:no-repeat;
   background-size: cover;
  background-position:top;
  h2{
    background-color:rgba(0,0,0,0.6);
    margin-top:auto ;
    text-align:left ;
    margin:0px ;
    height:50px;
    padding:10px ;
   
  }
    
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
 
   h2.depHeading{
       text-align: center;
       color: white;
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
    flex-direction: row;
    margin-top: 20px;
    position: relative;
    
    .depVis{
        width: 45%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
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
.servicesMain{
    min-height:50vh;
    width:100%;
    display:grid;
    grid-template-columns:1fr 1fr 1fr;
    margin-top:30px;
    .servicesList{
        grid-column:1/2;
        background-color:white;
        min-height:100px;
        width:100%;
        padding:20px ;
        overflow:hidden ;
    }
    .servicesData{
        grid-column:2/4;
        background-color:white;
        min-height:100px;
        width:90%;
        padding:20px ;
        display:flex;
        flex-direction:column;
       /* align-items:center ; */
        span{
            text-align:center;
            font-weight:bold;
            font-size:20px;
            width:100%;
        }
      .carContServ{
        min-width:100%;
        min-height:65vh;
       img{
        min-width:100%;
        height:55vh ;
       }
      }
    }

}
`;

export default function Facilities() {
    const [department,setDep]=useState([])
    const navigate=useNavigate()
    const [loading,setLoading]=useState(false)
    const {id}=useParams()
    const loadData=(id)=>{
   
        fetch(`https://mau-web-server.fly.dev/admin/get-single-department?departmentId=${id}&activity=faculty`)
        .then(res => {
            res.json()
                .then(data => {
                  setDep(data.message)
                  setLoading(false)
                  console.log(data,"+++++++++")
                })
        }).catch(err=>{
            
        })
    }
    useEffect(()=>{
        window.scrollTo({
            top:0,
            behavior: 'smooth',
          })
         
        loadData('b9DyaAUU')
       
    },[])
    return (
        <StyledContainer>
           {
    department.length>0&&(
        <>
        <div className='depHead'>
 <h2 style={{color:'white'}} className='depHeading'>CENTRAL LABORATORY</h2>
</div>
<div className='hodDetails'>
    {
        department[0].hod!=null&&(
        <div className='hodImage'>
            <img src={`https://res.cloudinary.com/nutscoders/image/upload/v1657102678/WhatsApp_Image_2022-07-06_at_11.17.29_AM_u6bz04.jpg`} alt='HOD'/> 
            <div className='dirName'>
                <span className='dirMain'>Dr. James Hamuel</span>
                <span>DIRECTOR CENTRAL LABORATORY</span>
                <span>+2347025599712</span>
            </div>
           
            
     </div>
        )
    }

 <div className='depMission'>
     <p style={{color:'black',lineHeight:'30px'}}>
     The Central Laboratory of the Modibbo Adama University, Yola was 
     established in order to offer effective and efficient services with 
     great flexibility, efficient management, and excellent technical and 
     scientific standards. The laboratory is equipped with state of the art 
     facilities divided into 5 specialized units which include Biochemical and 
     Toxicological, Analytical Chemistry and Quality Control, Geophysics and 
     Geochemical, Biophysics and Material Science and Microbiology and Molecular
      Biology units to cater for the diverse research needs of the academic and 
      research communities in various areas of science, health, agriculture and 
      engineering. We thrive to meet your research needs through timely and efficient
       professional approach. 
     You are therefore very much welcome to patronize our services.
     </p>
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
    <h4>loading.....</h4>
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
    To be a leading center for advanced research that will spear-head ground-breaking 
    novel scientific and technological discoveries and innovations for an all-encompassing national development.
    </p>
</div>


<div className='depVis'>
    <h1>MISSION</h1>
    <p>
    To provide a multidisciplinary, multifaceted and inclusive approach to advanced 
    research for the attainment of highest research potentials in science and technology for a 
    knowledge- driven socio-economic and capital development of the nation.
    </p>
</div>
</div>
         </>
     )
}

<div className='servicesMain'>
<div className='servicesList'>
<List>
<ListItemButton style={{
    color:'black',
    width:'80%'
}} component="a" href="#simple-list">
  <ListItemText primary='Biochemical and Toxicological Laboratory' />
</ListItemButton>
<Divider style={{backgroundColor:'#f9f9f9',width:'80%'}}/>
<ListItemButton style={{
    color:'black',
    width:'80%'
}} component="a" href="#simple-list">
  <ListItemText primary='Analytical Chemistry and Quality Control Laboratory' />
</ListItemButton>
<Divider style={{backgroundColor:'#f9f9f9',width:'80%'}}/>


</List>

</div>
<div className='servicesData'>
<span>Biochemical and Toxicological Laboratory</span>
<Carousel navButtonsAlwaysVisible={true} className='carContServ' indicators={false}>
    <div className='carContServ'>
     <img src='https://media.istockphoto.com/photos/medical-research-laboratory-portrait-of-a-beautiful-female-scientist-picture-id1354172647?b=1&k=20&m=1354172647&s=170667a&w=0&h=13SIt0U5v32bjaNHIlpWleLTgzcEHtAKYLAolMX_CPg=' alt='img'/>
     <span className='imgLab'>Label1</span>
    </div>
    

    <div className='carContServ'>
     <img src='https://media.istockphoto.com/photos/science-laboratory-research-and-development-concept-microscope-with-picture-id842452752?k=20&m=842452752&s=612x612&w=0&h=awmur8CZkHiBm0vbaSY5dPT_jTJWdY3vu5aVEhm0vFA=' alt='img'/>
     <span className='imgLab'>Label2</span>
    </div>
</Carousel>
<span>Operations and Services</span>
<ul>
 <li>
 Identification, quantification and
  purification of individual components of a mixture of drug, food, beverage etc.
 </li>
 <li>
 Determination of refractive index of liquid mixtures
 </li>
 <li>
 dentification of compounds such as compounded in plastics, blends, fillers, 
 paints, rubbers, coatings, resins, and adhesives
 </li>
 <li>
 Analysis  and measurement of toxic substances and compounds in soil,
  air or drinking/wastewater, 
 sludge, air-borne pollutants, drugs, oil spills, essential oils etc
 </li>
</ul>
</div>
</div>
</StyledContainer>


    )
}


