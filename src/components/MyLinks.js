import { Divider, ListItemButton, ListItemText } from '@mui/material'
import React from 'react'
import {useNavigate} from 'react-router-dom'
export default function MyLinks({link='',route}) {
    const navigate=useNavigate()
    return (
        <div>
<ListItemButton onClick={()=>{
navigate(route)
}}  style={{
    color:'#D07348'
}}>
  <ListItemText primary={link} />
</ListItemButton>
<Divider style={{backgroundColor:'#D07348'}}/>
        </div>
    )
}
