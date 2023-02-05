import {Link, useLocation, useParams,useNavigate} from 'react-router-dom'
import {Divider, List, ListItemButton, ListItemText } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import MyList from './MyList';
import AppContext from '../Context/app/appContext';

const StyledLi=styled.li`
position: relative;
display: flex;
flex-direction: column;
.content{
    min-width: 250px;
    min-height: 150px;
    background-color: rgba(208,115,72,1);
    position: absolute;
    right: 0;
    z-index: 100px;
    transition: all 0.5s;
    transform: scaleY(0);
    cursor: pointer;
    transform-origin: top;
   
    .styleLis{
        transition: all 0.5s;
    }
    .styleLis:hover{
    background-color:rgba(208,115,72,1);
    color: white;
    }
    .content-lists{
        border-bottom: 2px solid white;
    }

}
.content2{
    min-width: 250px;
    min-height: 300px;
    background-color: rgba(208,115,72,1);
    position: absolute;
    opacity:0;
    right:0;
    z-index: 10px;
    transition: all 0.5s;
    transform: scale(0px);
    transform: translateX(1000px);
    cursor: pointer;
    transform-origin: top;
    bottom:-270px;
    .styleLis{
        transition: all 0.5s;
        color: white;
    }
    .styleLis:hover{
    background-color:rgba(255,255,255,1);
    color: rgba(208,115,72,1);
    }
    .content-lists{
        border-bottom: 2px solid white;
    }

}
.content3{
    min-width: 250px;
    min-height: 300px;
    background-color: rgba(208,115,72,1);
    position: absolute;
    opacity:0;
    right:0;
    z-index: 10px;
    transition: all 0.05s;
    transform: scale(0px);
    transform: translateX(1000px);
    cursor: pointer;
    transform-origin: top;
    bottom:-270px;
    .styleLis{
        transition: all 0.2s;
        color: white;
    }
    .styleLis:hover{
    background-color:white;
    color:rgba(208,115,72,1);
    }
    .content-lists{
        border-bottom: 2px solid white;
    }

}
:hover .content{
    transform: scaleY(1);

}

`;
export default function DropList({link='',route=''}) {
    const [allList,setAllList]=useState([])
    const myAppParam=useContext(AppContext)
    const [loading,setLoading]=useState(false)
    const [show,setShow]=useState('show')
    useEffect(()=>{
        loadData()
    },[])

    const loadData=()=>{
        setLoading(true)
        fetch('https://mau-web-server.fly.dev/admin/get-all-faculties-schools-college')
        .then(res => {
            res.json()
                .then(data => {
                    setLoading(false)
                    setAllList(data.message)
                })
        }).catch(err=>{
            setLoading(false)
        })
    }

    const myParams=useLocation()
    const navigate=useNavigate()
    return (
            <StyledLi>
                <a href='#' style={{
                    backgroundColor:myParams.pathname.includes(`/department`)||myParams.pathname.includes(`/course`)||myParams.pathname.includes(`/program`)?'black':'transparent',
                    color:myParams.pathname.includes(`/department`)||myParams.pathname.includes(`/course`)||myParams.pathname.includes(`/program`)?'white':'black'
                }}>{link}Academics</a>
                <div className='content'>
               <List>
               {
                       loading&&(
                           <h4>loading.......</h4>
                       )
            }
            {
                !loading&&(
                    allList.map((dat,ind)=>(
                        <ListItemButton key={ind} style={{
                            color:'white',
                            textTransform:'capitalize',
                            fontWeight:'bold'
                        }} component="div" className='content-lists'>
                            {/* <DropList/> */}
                         <span className='lii'>
                            {dat.name}
                            <div className={`content${ind==0?'2':'3'}`} >
                         <List>
                                   
                         {
    !loading&&
    dat.list.length>0>0&&(
    dat.list.map((dt,ind)=>(
    <ListItemButton key={ind} onClick={()=>{
            //  myAppParam.loadData(dt.id)
             navigate(`/department/${dt.detail.id}/${dat.name}`)
        
          }} style={{
        color:'white',
        textTransform:'capitalize',
        fontWeight:'bold',
        width:'100%',
        height:'100%'
        }} component="span" className='content-lists'>
        <ListItemText className='styleLis'  primary={dt.detail.name} />
        </ListItemButton> 
    ))
    )
}    
                               
                 
                       </List>
                         </div>
                         </span>
                         
                         {/* <ListItemText className='li2'  primary='Undergraduate Portal' /> */}
                         
                 
                    
                 
                         </ListItemButton>
                    ))
                )

            }
          
       

                   
               {/* <DropList/> */}
                    
              


            
               </List>
                </div>
                
            </StyledLi>


    )
}









 