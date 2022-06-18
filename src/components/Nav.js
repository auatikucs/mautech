import { Button, Drawer, List } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react'
import ForwardIcon from '@mui/icons-material/ArrowForward'
import DrawerIcon from '@mui/icons-material/MenuOutlined'
import styled from 'styled-components'
import MyList from '../sub-components/MyList';
import  CancelOutlined from '@mui/icons-material/CancelOutlined';
import {Link, useLocation, useParams} from 'react-router-dom'
import DropList from '../sub-components/DropList';
import DropPortal from '../sub-components/DropPortal';


const MyNav=styled.nav`
min-height:130px;
max-height:130px;
min-width: 100%;
position: fixed;
top:0;
transition: all 1s;
background:  rgba( 255, 255, 255, 0.25 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 4px );
-webkit-backdrop-filter: blur( 4px );
border: 1px solid rgba( 255, 255, 255, 0.18 );
z-index: 200;
opacity: 1;
box-shadow: 0px 0px 10px rgba(0,0,0,0.5);
display: flex;
flex-direction:column;

.logoGroup.hide{
    background-color: red;
    transform: scaleY(0);
}
.logoGroup{
    display: flex;
    flex-direction: row;
    height: 50%;
    width: 100%;
    transition: all 0.5s;
    .logo{
    min-width: 30%;
    min-height:100px;
    background-color:transparent;
    display: flex;
    flex-direction: row;
    img{
        width: 70px;
        height: 70px;
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
.main-links{
        height: 50px;
        width: 100%;
        border-bottom-left-radius: 20px;
        background-color: #D07348;
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
            font-size: 16px;
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
    justify-content:space-between;
    align-items: flex-end;
    

    .sub-links{
        display: flex;
        width: 100%;
        flex: 1;
        background-color: white;
        justify-content:space-between;
        align-items:center;
        transition: all 0.4s;
        ul.myFavList{
            display: flex;
            justify-content:space-between;
            align-items: center;
        }
        li{
          text-decoration: none;
          color: black;
          display: inline;
          margin: 5px;
          text-transform: uppercase;
          margin-left: 25px;
          min-height: 40px;
          min-width: 100px;
          justify-content: center;
          align-items: center;
       

        }
        a{
            text-decoration: none;
            color:black;
            font-size: 14px;
            font-weight: bold;
            transition: all 0.3s;
            padding: 10px;
            width:100x;
            justify-content: center;
            align-items: center;
            text-align: center;
            

        }
      
        li:hover{
            color:white;
            background-color:#FFC53A;
        }
        a:hover{
            color: white;
        }
        a:visited{
            border-bottom:5px solid #D07348;
        }
        
    }
}
.phone-links{
    display: none;
}




@media only screen 
and (min-device-width : 320px) 
and (max-device-width : 480px) {
min-height:100px;
max-height:100px;
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
}


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

}
`;

const MobileLinks=styled.div`
min-height: 100vh;
min-width: 250px;
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
    useEffect(()=>{
    let prevScrollpos = window.pageYOffset;
    window.addEventListener('scroll',(e)=>{
        let currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            setHide('')
          } else {
            setHide('hide')
          }
          prevScrollpos = currentScrollPos;
    })
    },[])
    const myParams=useLocation()
    const navRef=useRef()
    const [show, setShow] = useState('show')
    const [index,setIndex]=useState(1)
    const [isDrawerOpen,setIsDrawerOpen]=useState(false)
    

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


         <div className='main-links'>
            <ul className='myFavList'>
                <li><a href='#'>Careers</a></li>
                <li><a href='#'>Resources</a></li>
                <li><a href='#'>Alumni</a></li>
                <li><a href='#'>Services</a></li>
            </ul>
          </div>
        </div>
        

         <div className='links'>
          <div className='sub-links'>
          <ul>
                <li style={{
                 backgroundColor:myParams.pathname=='/'?'#FFC53A':'transarent'
                }}><Link style={{
                    color:myParams.pathname=='/'?'white':'black',
                    

                }} to='/'>Home</Link></li>
                <li>
                <Link className='miniLink' style={{
                     borderBottom:myParams.pathname=='/about'?'5px solid #D07348':null
                }} to='/about'>About Us</Link>
                </li>
                <li><Link style={{
                    borderBottom:myParams.pathname=='/admissions'?'5px solid #D07348':null
                }} to='/admissions'>Admissions</Link></li>

                {/* <li><Link style={{
                    borderBottom:myParams.pathname=='/program'?'5px solid #D07348':null
                }} to='/program'>Academics</Link></li> */}

                <DropList/>

                <DropPortal/>

                {/* <li>
                <Link style={{
                    borderBottom:myParams.pathname=='/portal'?'5px solid #D07348':null
                }} to='/portal'>Portals</Link></li> */}

                <li>
                <Link to='/campus' style={{
                    borderBottom:myParams.pathname=='/campus'?'5px solid #D07348':null
                }}  >Campus Life</Link>
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


         <div className='phone-links'>
         <DrawerIcon onClick={()=>{
             setIsDrawerOpen(true)
         }} color='black' style={{
             height:40,
             width:40,
             position:'absolute',
             right:0,
             marginRight:40
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
          <h4>LINKS</h4>
          <List>
              <Link onClick={()=>{
                  setIsDrawerOpen(false)
              }} to='/'><MyList title='Home'/></Link>
               <Link onClick={()=>{
                  setIsDrawerOpen(false)
              }} to='/program'><MyList title='Academics'/></Link>
              <Link onClick={()=>{
                  setIsDrawerOpen(false)
              }} to='/admissions'><MyList title='Admissions'/></Link>
              <Link onClick={()=>{
                  setIsDrawerOpen(false)
              }} to='/portal'><MyList title='Portals'/></Link>
              <Link onClick={()=>{
                  setIsDrawerOpen(false)
              }} to='/campus'> <MyList title='Campus Life'/></Link>
               <Link onClick={()=>{
                  setIsDrawerOpen(false)
              }} to='/about'><MyList title='About Us'/></Link>
          </List>
          <h4>Units</h4>
          <List>
              <MyList title='Careers'/>
              <MyList title='Resources'/>
              <MyList title='Alumni'/>
              <MyList title='Services'/>
             
          </List>
      </MobileLinks>
    </Drawer>
        </MyNav>
    )
}
