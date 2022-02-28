import { Divider, ListItemButton, ListItemText } from '@mui/material'
import React from 'react'

export default function MyNews({news=''}) {
    return (
        <div>
<ListItemButton style={{
    color:'#D07348'
}} component="a" href="#simple-list">
  <ListItemText primary={news} />
</ListItemButton>
<Divider style={{backgroundColor:'#D07348'}}/>
        </div>
    )
}
