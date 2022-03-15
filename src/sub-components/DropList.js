import {Link, useLocation, useParams,useNavigate} from 'react-router-dom'
import {Divider, List, ListItemButton, ListItemText } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import MyList from './MyList';

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
    const myParams=useLocation()
    const navigate=useNavigate()
    return (
            <StyledLi>
                <a href='#' style={{
                    borderBottom:myParams.pathname.includes(`/department`)?'5px solid #D07348':null
                }}>{link}Academics</a>
                <div className='content'>
               <List>
               <ListItemButton onClick={()=>{
                  navigate('/department/008')
               }} style={{
           color:'white',
           textTransform:'capitalize',
           fontWeight:'bold'
       }} component="span" className='content-lists'>
        <ListItemText  primary='Faculty of Medical Sciences' />
             </ListItemButton>


             <ListItemButton onClick={()=>{
                  navigate('/department/004')
               }} style={{
           color:'white',
           textTransform:'capitalize',
           fontWeight:'bold'
       }} component="span" className='content-lists'>
        <ListItemText  primary='Faculty of Life Sciences' />
             </ListItemButton>


             <ListItemButton onClick={()=>{
                  navigate('/department/005')
               }} style={{
           color:'white',
           textTransform:'capitalize',
           fontWeight:'bold'
       }} component="span" className='content-lists'>
        <ListItemText  primary='Faculty of Physical Science' />
             </ListItemButton>

             <ListItemButton onClick={()=>{
                  navigate('/department/006')
               }} style={{
           color:'white',
           textTransform:'capitalize',
           fontWeight:'bold'
       }} component="span" className='content-lists'>
        <ListItemText  primary='Faculty of Enviromental Sciences' />
             </ListItemButton>

             <ListItemButton onClick={()=>{
                  navigate('/department/003')
               }} style={{
           color:'white',
           textTransform:'capitalize',
           fontWeight:'bold'
       }} component="span" className='content-lists'>
        <ListItemText  primary='Faculty of Engineering' />
             </ListItemButton>

             <ListItemButton onClick={()=>{
                  navigate('/department/002')
               }} style={{
           color:'white',
           textTransform:'capitalize',
           fontWeight:'bold'
       }} component="span" className='content-lists'>
        <ListItemText  primary='Faculty of Agricultural' />
             </ListItemButton>

             <ListItemButton onClick={()=>{
                  navigate('/department/001')
               }} style={{
           color:'white',
           textTransform:'capitalize',
           fontWeight:'bold'
       }} component="span" className='content-lists'>
        <ListItemText  primary='Faculty of Social Sciences' />
             </ListItemButton>


             <ListItemButton onClick={()=>{
                  navigate('/department/007')
               }} style={{
           color:'white',
           textTransform:'capitalize',
           fontWeight:'bold'
       }} component="span" className='content-lists'>
        <ListItemText  primary='Faculty of Education'/>
             </ListItemButton>
               </List>
                </div>
                
            </StyledLi>
 
    )
}
