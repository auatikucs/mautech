import {Divider, ListItemButton, ListItemText } from '@mui/material'
import React from 'react'

export default function MyList({title}) {
    return (
<div style={{
    backgroundColor:'transparent'
}}>
<ListItemButton style={{
    color:'white'
}} component="a" href="#simple-list">
  <ListItemText primary={title} />
</ListItemButton>
<Divider style={{backgroundColor:'#f9f9f9'}}/>
 </div>
    )
}
