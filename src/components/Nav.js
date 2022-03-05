import { Button, Drawer, List } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react'
import ForwardIcon from '@mui/icons-material/ArrowForward'
import DrawerIcon from '@mui/icons-material/MenuOutlined'
import styled from 'styled-components'
import MyList from '../sub-components/MyList';
import  CancelOutlined from '@mui/icons-material/CancelOutlined';
import {Link, useLocation, useParams} from 'react-router-dom'


const MyNav=styled.nav`
min-height:130px;
max-height:130px;
min-width: 100%;
position: fixed;
top:0;
transition: all 0.3s;
background:  rgba( 255, 255, 255, 0.25 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 4px );
-webkit-backdrop-filter: blur( 4px );
border: 1px solid rgba( 255, 255, 255, 0.18 );
z-index: 200;
opacity: 1;
box-shadow: 0px 0px 10px rgba(0,0,0,0.5);
display: flex;
flex-direction: row;
.logo{
    min-width: 30%;
    min-height: 100%;
    background-color:transparent;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    img{
        width: 100px;
        height: 100px;
        margin-top: 10px;
    }
    .logo-head{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: relative;
        padding: 10px;
        h4{
         text-align: center;
         font-size: 20px;
         font-weight: bold; 
         color:#D07348;
         text-transform: uppercase;
        }
        p{
            position: absolute;
            bottom: 0;
            left: 0;
            color: #D07348;
            font-size: 18px;
            width: 100%;
            
            
        }
    }
}

.links{
    width: 70%;
    background-color: transparent;
    display: flex;
    flex-direction: column;
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

    .sub-links{
        display: flex;
        width: 100%;
        flex: 1;
        background-color: white;
        justify-content:flex-start;
        align-items:center;
        transition: all 0.4s;
        li{
          text-decoration: none;
          color: #D07348;
          display: inline;
          margin: 5px;
          text-transform: uppercase;
          margin-left: 20px;

        }
        a{
            text-decoration: none;
            color:#D07348 ;
            font-size: 18px;
            font-weight: bold;
            transition: all 0.3s;
            border-right: 1px solid lightgray;
            padding-right: 10px;
            

        }
      
        a:hover{
            border-bottom:5px solid #D07348;
        }
        a:active{
            border-bottom:5px solid #D07348;
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
    const myParams=useLocation()
    const navRef=useRef()
    const [show, setShow] = useState('show')
    const [index,setIndex]=useState(1)
    const [isDrawerOpen,setIsDrawerOpen]=useState(false)
    useEffect(()=>{
        console.log("++++++",myParams.pathname)
    },[])

    return (
        <MyNav>
         <div className='logo'>
          <img src={require('../assets/mau.png')} alt='logo'/>
          <div className='logo-head'>
          <h4>Modibbo Adama <br/> University</h4>
          <i><p>Established in 1981</p></i>
          </div>
           
         </div>

         <div className='links'>
          <div className='main-links'>
            <ul>
                <li><a href='#'>Careers</a></li>
                <li><a href='#'>Resources</a></li>
                <li><a href='#'>Alumni</a></li>
                <li>
                <Link className='miniLink' style={{
                    color:myParams.pathname=='/about'?'yellowgreen':'white',
                }} to='/about'>About Us</Link>
                </li>
            </ul>
          </div>

          <div className='sub-links'>
          <ul>
                <li><Link style={{
                    borderBottom:myParams.pathname=='/'?'5px solid #D07348':null
                }} to='/'>Home</Link></li>

                <li><Link style={{
                    borderBottom:myParams.pathname=='/admissions'?'5px solid #D07348':null
                }} to='/admissions'>Admissions</Link></li>

                <li><Link style={{
                    borderBottom:myParams.pathname=='/program'?'5px solid #D07348':null
                }} to='/program'>Academics</Link></li>

                <li><a href='#'>Portals</a></li>
                <li><a href='#'>Campus Life</a></li>
            </ul>
            <Button style={{
                marginLeft:'auto',
                marginRight:20,
                backgroundColor:'#D07348',
                borderRadius:50
            }} variant='contained' endIcon={<ForwardIcon/>}>Apply Now</Button>
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
              <MyList title='Portals'/>
              <MyList title='Campus Life'/>
          </List>
          <h4>Units</h4>
          <List>
              <MyList title='Careers'/>
              <MyList title='Resources'/>
              <MyList title='Alumni'/>
              <Link onClick={()=>{
                  setIsDrawerOpen(false)
              }} to='/about'><MyList title='About Us'/></Link>
          </List>
      </MobileLinks>
    </Drawer>
        </MyNav>
    )
}
