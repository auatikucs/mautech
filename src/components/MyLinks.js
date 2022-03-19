import { Divider, ListItemButton, ListItemText } from '@mui/material'
import React, { useContext } from 'react'
import {useNavigate} from 'react-router-dom'
import AppContext from '../Context/app/appContext'
export default function MyLinks({link='',route,id}) {
    const myAppParam=useContext(AppContext)
    const navigate=useNavigate()
    return (
     <div>
<ListItemButton onClick={()=>{
myAppParam.loadData(id)
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
