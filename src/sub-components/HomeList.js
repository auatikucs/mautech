import { Divider, ListItemButton, ListItemText } from '@mui/material'
import React, { useContext } from 'react'
import {useNavigate} from 'react-router'
export default function HomeList({link='',route,id=null,isLink=false}) {
    const navigate=useNavigate()
    return (
     <div>
<ListItemButton onClick={()=>{
if (id!=null) {
 navigate(`${id}`)
 return   
}
const el=document.createElement('a')
if (!isLink) {
 el.setAttribute('download',`${link}`)
}
el.setAttribute('href',`${route}`)
// console.log(el)
el.click()
}}  style={{
    color:'#D07348'
}}>
  <ListItemText primary={link} />
</ListItemButton>
<Divider style={{backgroundColor:'#D07348'}}/>
        </div>
    )
}
