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
    min-height: 250px;
    background-color: rgba(255,255,255,0.8);
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
        border-bottom: 2px solid rgba(208,115,72,1);
    }

}
.content2{
    min-width: 250px;
    min-height: 300px;
    background-color: rgba(255,255,255,0.8);
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
    }
    .styleLis:hover{
    background-color:rgba(208,115,72,1);
    color: white;
    }
    .content-lists{
        border-bottom: 2px solid rgba(208,115,72,1);
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
    useEffect(()=>{
        loadData()
    },[])

    const loadData=()=>{
        setLoading(true)
        fetch('https://new-modibbo-adama.herokuapp.com/admin/get-all-faculties-schools-college')
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
                    borderBottom:myParams.pathname.includes(`/department`)?'5px solid #D07348':null
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
                            color:'rgba(208,115,72,1)',
                            textTransform:'capitalize',
                            fontWeight:'bold'
                        }} component="div" className='content-lists'>
                            {/* <DropList/> */}
                         <span className='lii'>
                            {dat.name}
                         <div className='content2'>
                         <List>
                                   
                         {
    !loading&&
    dat.list.length>0>0&&(
    dat.list.map((dt,ind)=>(
    <ListItemButton key={ind} onClick={()=>{
            //  myAppParam.loadData(dt.id)
             navigate(`/department/${dt.detail.id}`)
        
          }} style={{
        color:'rgba(208,115,72,1)',
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









 