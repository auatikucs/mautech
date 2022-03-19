import {Link, useLocation, useParams,useNavigate} from 'react-router-dom'
import {Divider, List, ListItemButton, ListItemText } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import MyList from './MyList';
import AppContext from '../Context/app/appContext';

const StyledLi=styled.li`
position: relative;
.content{
    min-width: 250px;
    min-height: 250px;
    background-color: rgba(208,115,72,0.85);
    position: absolute;
    right: 0;
    z-index: 100;
    transition: all 0.5s;
    transform: scaleY(0);
    cursor: pointer;
    transform-origin: top;
    .content-lists{
        border-bottom: 2px solid rgba(208,115,72,1);
    }

}
:hover .content{
    transform: scaleY(1);
}
`;
export default function DropList({link='',route=''}) {
    const [facList,setList]=useState([])
    const myAppParam=useContext(AppContext)
    const [loading,setLoading]=useState(false)
    useEffect(()=>{
        loadData()
    },[])

    const loadData=()=>{
        setLoading(true)
        fetch('https://new-modibbo-adama.herokuapp.com/admin/get-all-faculties')
        .then(res => {
            res.json()
                .then(data => {
                    setLoading(false)
                    setList(data.message)
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
                       !loading&&
                       facList.length>0&&(
                       facList.map((fac,ind)=>(
                        <ListItemButton key={ind} onClick={()=>{
                            myAppParam.loadData(fac.facultyId)
                            navigate(`/department/${fac.facultyId}`)

                         }} style={{
                     color:'white',
                     textTransform:'capitalize',
                     fontWeight:'bold'
                 }} component="span" className='content-lists'>
                  <ListItemText  primary={fac.facultyName} />
                       </ListItemButton>
                       ))
                       )
                   }
              


            
               </List>
                </div>
                
            </StyledLi>
 
    )
}

