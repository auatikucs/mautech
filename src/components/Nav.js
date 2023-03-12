import { Accordion, AccordionDetails, AccordionSummary, Button, Drawer, List, Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react'
import ForwardIcon from '@mui/icons-material/ArrowForward'
import DrawerIcon from '@mui/icons-material/MenuOutlined'
import styled from 'styled-components'
import MyList from '../sub-components/MyList';
import  CancelOutlined from '@mui/icons-material/CancelOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Link, useLocation, useNavigate, useParams} from 'react-router-dom'
import DropList from '../sub-components/DropList';
import DropPortal from '../sub-components/DropPortal';
import MainDrop from '../sub-components/MainDrop'
import AboutDrop from '../sub-components/AboutDrop'
import AdmissionDrop from '../sub-components/AdmissionDrop'
import DropFaci from '../sub-components/DropFaci';
import { loadAllFac } from '../helpers/loadAllFac';

const MyNav=styled.nav`
min-height:107px;
max-height:107px;
min-width: 100%;
position: fixed;
top:0;
transition: all 1s;
background:  rgba( 255, 255, 255, 1 );
box-shadow: 0 3px 3px 0 rgba(31, 38, 135, 0.37 );
/* backdrop-filter: blur( 4px ); */
/* -webkit-backdrop-filter: blur( 4px ); */
border: 1px solid rgba( 255, 255, 255, 0.18 );
z-index: 200;
opacity: 1;
/* box-shadow: 0px 0px 10px rgba(0,0,0,0.5); */
display: flex;
flex-direction:column;


.logoGroup.hide{
    background-color: red;
    transform: scaleY(0);
}
.logoGroup{
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
    transition: all 0.5s;
    .logo{
    width: 30%;
    min-height:50px;
    background-color:transparent;
    display: flex;
    flex-direction: row;
    img{
        width: 100px;
        height: 100px;
        margin-top: 3px;
    }
    .logo-head{
        display: flex;
        flex-direction: column;
        position: relative;
        justify-content: flex-start;
        h4{
         text-align:left;
         font-size: 18px;
         font-weight: bold; 
         color:#D07348;
         text-transform: uppercase;
         line-height: 20px;
         width:80%;
        }
        p{
            color:black;
            font-size: 15px;
            line-height:1px;
            text-align: left;
            margin-top: -15px;
            width: 80%;
           
            
            
        }
    }
}
.newLink{
    width:80%;
    display: flex;
    flex-direction: column;
    
    .main-links{
        height: 30px;
        width: 100%;
        border-bottom-left-radius: 20px;
        background-color: #D07348;
        padding: 10px;
        position:relative;
        ul{
            display:flex;
        justify-content:flex-start;
        position:absolute;
        top:0;
        left:0;
        }
        li{
          text-decoration: none;
          color: white;
          display: inline;
          margin: 5px;
          text-transform: uppercase;
          margin-left: 20px;
        
        }
        a{
            text-decoration: none;
            color: white;
            font-size:14px;
            transition: all 0.3s;
            font-weight: lighter;

        }
        li:hover{
            color:yellowgreen;
         }
        a:hover{
            color:yellowgreen;
        }
    }
}
.links{
    width:100%;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    justify-content:flex-start;
    align-items:flex-start;
    

    .sub-links{
        display: flex;
        width: 100%;
        background-color: white;
        justify-content:space-between;
        align-items:flex-start;
        transition: all 0.4s;
        ul.myFavList{
            display: flex;
            
           
        }
        li{
          text-decoration: none;
          color: black;
          display: inline;
          margin-right: 10px;
          text-transform: uppercase;
          min-height: 40px;
          min-width: 100px;
          /* justify-content: center;
          align-items: center; */
       

        }
        a{
            text-decoration: none;
            color:black;
            font-size: 14px;
            font-weight: bold;
            transition: all 0.3s;
            padding: 10px;
            width:100x;
            text-align: center;
            

        }
      
        li:hover{
            color:white;
            background-color:#D07348;
        }
        a:hover{
            color: white;
        }
        a:visited{
            border-bottom:5px solid #D07348;
        }
        
    }
}
}


.phone-links{
    display: none;
}






/* 
@media only screen 
  and (min-device-width: 768px) 
  and (max-device-width: 1024px) 
  and (-webkit-min-device-pixel-ratio: 1) {
  
    .logo{
    .logo-head{
        h4{
            font-size: 14px;
            text-align: center;
            text-transform: uppercase;
        }
        p{
        font-size: 9px;
        margin-left: 20px;
       
        }
    }
    img{
    width: 80px;
    height: 80px;
    margin-top: 10px;
    margin-bottom: 10px;
}
}

.links{
    display: none;
}
.phone-links{
    display: flex;
    align-items: center;
}

} */
@media only screen 
and (max-width : 1060px) 
{
min-height:100px;
max-height:100px;
.logoGroup{
    .logo{
    width:50%;
    .logo-head{
        h4{
            font-size: 14px;
            text-align: center;
            text-transform: uppercase;
        }
        p{
        font-size: 9px;
        margin-left:0px;
        text-align:center;
       
        }
    }
    img{
    width: 80px;
    height: 80px;
    margin-top: 10px;
    margin-bottom: 10px;
}
}
}

.newLink{
display:none;
transform:scale(0);

}
.links{
    transform:scale(0);
}

.phone-links{
    display: flex;
    align-items: center;
}
}

@media only screen 
and (min-device-width : 320px) 
and (max-device-width : 480px) {
    .logoGroup{
   width:100%;
   height:100px;
    .logo{
    min-width:60%;
    .logo-head{
        h4{
            font-size: 14px;
            text-align: center;
            text-transform: uppercase;
            width:100%;
        }
       
    }
    img{
    width: 65px;
    height: 65px;
    margin-top: 10px;
    margin-bottom: 10px;
}
}
}

}
`;

const MobileLinks=styled.div`
min-height: 200vh;
min-width:100vw;
background-color:#400000;
a{
text-decoration: none;
}
h4{
    color: white;
    font-weight: bolder;
    font-size: 18px;
    margin-left: 20px;
    text-transform: uppercase;
   
}


`;
export default function Nav() {
const [hide,setHide]=useState('')
const [allUnits,setAllUnits]=useState([])
const navigate=useNavigate()
    const myParams=useLocation()
    const navRef=useRef()
    const [show, setShow] = useState('show')
    const [index,setIndex]=useState(1)
    const [isDrawerOpen,setIsDrawerOpen]=useState(false)
    useEffect(()=>{
        fetch('https://mau-web-server.fly.dev/admin/get-all-faculties-schools-college')
        .then(res => {
            res.json()
                .then(data => {
                console.log(data.message,"|||")
                setAllUnits(data.message)  
                })
        }).catch(err=>{
    
        })
    },[])

    return (
        <MyNav className={`mynav ${hide}`}>
        <div className={`logoGroup ${hide}`}>
        <div className='logo'>
          <img src={require('../assets/mau.png')} alt='logo'/>
          <div className='logo-head'>
          <h4>Modibbo Adama University, Yola</h4>
         <p>Established in 1981</p>
         
          </div> 
         </div>

<div className='newLink'>
         <div className='main-links'>
            <ul className='myFavList'>
                <li><Link to='/downloads'>Downloads</Link> </li>
                <li><Link to='/careers'>Careers</Link> </li>
                <li><Link to='/alumni'>Alumni</Link> </li>
                <li><Link to='/gallery'>Gallery</Link> </li>
                <li><a href='#'>R&D</a></li>
                <li><Link to='/oer'>OER</Link> </li>
                <li><a href='#'>Login</a></li>
            </ul>
          </div>



      
          <div className='links'>
          <div className='sub-links'>
          <ul>
                <li style={{
                 backgroundColor:myParams.pathname=='/'?'black':'transparent',
                }}><Link style={{
                    color:myParams.pathname=='/'?'white':'black',
                    
                    

                }} to='/'>Home</Link></li>
                <li>
                <AboutDrop/>
                </li>
                <li>
                <MainDrop/>
                </li>

                <li style={{
                 backgroundColor:myParams.pathname.includes('admission')?'black':'transparent'
                }}><Link style={{
                    color:myParams.pathname.includes('admission')?'white':'black',
                    

                }} to='/admissions'>Admissions</Link></li>
               
                {/* <li>
                    <AdmissionDrop/>
                </li> */}

                {/* <li><Link style={{
                    borderBottom:myParams.pathname=='/program'?'5px solid #D07348':null
                }} to='/program'>Academics</Link></li> */}

                {/* <DropList/> */}
                
               
                

                {/* <li>
                <Link style={{
                    borderBottom:myParams.pathname=='/portal'?'5px solid #D07348':null
                }} to='/portal'>Portals</Link></li> */}

                <li>
               <DropFaci/>
                </li>

                <li style={{
                 backgroundColor:myParams.pathname=='/portals'?'black':'transparent'
                }}>
                <Link to='/portals' style={{
                 color:myParams.pathname=='/portals'?'#FFFFFF':'black'
                }}  >Portals</Link>
                </li>

                <li style={{
                 backgroundColor:myParams.pathname=='/campus'?'black':'transparent'
                }}>
                <Link to='/campus' style={{
                 color:myParams.pathname=='/campus'?'#FFFFFF':'black'
                }}  >Campus Life</Link>
                </li>

                <li style={{
                 backgroundColor:myParams.pathname.includes('interven')?'black':'transparent'
                }}>
                <Link style={{
                 color:myParams.pathname.includes('interven')?'#FFFFFF':'black'
                }} to='/intervention'>Intervention</Link>
                </li>
              
            </ul>
            {/* <Button style={{
                marginLeft:'auto',
                marginRight:20,
                backgroundColor:'#D07348',
                borderRadius:50
            }} variant='contained' endIcon={<ForwardIcon/>}>Apply Now</Button> */}
          </div>
         </div>
    
</div>
     

        </div>
        



         <div className='phone-links'>
         <DrawerIcon onClick={()=>{
             setIsDrawerOpen(true)
         }} color='black' style={{
             height:40,
             width:40,
             position:'absolute',
             right:0,
             marginRight:50,
             top:0,
             marginTop:40
         }}/>
         </div>

     <Drawer
      anchor='right'
      open={isDrawerOpen}
      onClose={()=>setIsDrawerOpen(false)}
    >
      <MobileLinks>
          <CancelOutlined onClick={()=>{
              setIsDrawerOpen(false)
          }} style={{
             height:30,
             width:30,
             position:'fixed',
             right:0,
             marginRight:10,
             marginTop:10,
             color:'white'
             
         }}/>
          <h4>MENU</h4>
          <List>
              <Link onClick={()=>{
                  setIsDrawerOpen(false)
              }} to='/'><MyList title='Home'/></Link>
            <Accordion>
        <AccordionSummary
          style={{backgroundColor:'#400000'}}
          expandIcon={<ExpandMoreIcon style={{color:'#ffffff'}} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{color:'#ffffff'}}>Academics</Typography>
        </AccordionSummary>
        <AccordionDetails>
           
         {
            allUnits.length>0&&(
                allUnits.map((un,ind)=>(
                    <Accordion key={ind.toString()}>
                    <AccordionSummary
                      style={{backgroundColor:'#400000'}}
                      expandIcon={<ExpandMoreIcon style={{color:'#ffffff'}} />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography style={{color:'#ffffff'}}>{un.name}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        {
                            un.list.map((sub,ind)=>(
                                <Typography onClick={()=>{
                                    navigate(`/department/${sub.detail.id}/${un.name}`)
                                    setIsDrawerOpen(false)
                                }} style={{
                                    borderBottom:'1px solid gray'
                                }} key={ind}>{sub.detail.name}➤</Typography>
                            ))
                        }
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                ))
            )
         }

       


        </AccordionDetails>
      </Accordion>


      <Accordion>
                    <AccordionSummary
                      style={{backgroundColor:'#400000'}}
                      expandIcon={<ExpandMoreIcon style={{color:'#ffffff'}} />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography style={{color:'#ffffff'}}>About</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography onClick={()=>{
                                    navigate('/about')
                                    setIsDrawerOpen(false)
                            }} style={{
                                    borderBottom:'1px solid gray'
                                }}>
                        About MAU➤
                      </Typography>
                      <Typography onClick={()=>{
                                    navigate('/leadership')
                                    setIsDrawerOpen(false)
                            }} style={{
                                    borderBottom:'1px solid gray'
                                }}>
                        MAU Leadership➤
                      </Typography>
                    </AccordionDetails>
         </Accordion>

              <Link onClick={()=>{
                  setIsDrawerOpen(false)
              }} to='/admissions'><MyList title='Admissions'/></Link>
              <Link onClick={()=>{
                  setIsDrawerOpen(false)
              }} to='/portals'><MyList title='Portals'/></Link>
              <Link onClick={()=>{
                  setIsDrawerOpen(false)
              }} to='/campus'> <MyList title='Campus Life'/></Link>
               <Link onClick={()=>{
                  setIsDrawerOpen(false)
              }} to='/facility/001'><MyList title='Facilities'/></Link>
              <Link onClick={()=>{
                  setIsDrawerOpen(false)
              }} to='/intervention'><MyList title='Interventions'/></Link>
                <Link onClick={()=>{
                  setIsDrawerOpen(false)
              }} to='/downloads'><MyList title='Downloads'/></Link>
                <Link onClick={()=>{
                  setIsDrawerOpen(false)
              }} to='/careers'><MyList title='Careers'/></Link>
                <Link onClick={()=>{
                  setIsDrawerOpen(false)
              }} to='/alumni'><MyList title='Alumni'/></Link>
                <Link onClick={()=>{
                  setIsDrawerOpen(false)
              }} to='/gallery'><MyList title='Gallery'/></Link>
                <Link onClick={()=>{
                  setIsDrawerOpen(false)
              }} to='#'><MyList title='R & D'/></Link>
                <Link onClick={()=>{
                  setIsDrawerOpen(false)
              }} to='/oer'><MyList title='OER'/></Link>

          </List>
      </MobileLinks>
    </Drawer>
        </MyNav>
    )
}
