import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Divider, List,ListItem, ListItemButton, ListItemText} from '@mui/material';
import { Facebook, LinkedIn, LocalPrintshopOutlined, Mail, Twitter } from '@mui/icons-material';
import MyList from '../sub-components/MyList';

const StyledContainer=styled.div`
margin-top: 107px;
.mainPrinPic{
height: 80vh;
}
.princContent{
    min-height: 80vh;
    width: 100%;
    display: flex;
    flex-direction: row;
    .icons01{
        min-width: 10%;
        min-height: 100%;
        background-color:white;
        display: flex;
        flex-direction: column;
        padding: 10px;
        align-items: flex-end;
    }
    .main002{
        min-width: 90%;
        min-height: 100%;
        background-color: white;
        transform: translateY(-100px);
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        .mainFirst{
            grid-column: 1/4;
            display: flex;
            flex-direction: column;
            padding: 20px;
            .main002Head{
            color: black;
            font-size: 40px;
            font-weight: bolder;
            

        }
        .main003Head{
            color: black;
            font-size: 30px;
            
            

        }
        p{
            text-align: justify;
        }
        }
        .mainSecond{
            display: flex;
            flex-direction: column;
            color: black;
            padding: 20px;
        }
        
    }

}
`;
export default function Principal() {
    useEffect(()=>{
        window.scrollTo({
            top:0,
            behavior: 'smooth',
          })
    },[])
    return (
        <StyledContainer>
            <div style={{
             background:`url('https://www.ox.ac.uk/sites/files/oxford/styles/ow_large_feature/s3/field/field_image_main/bcar_Richardson4.jpg?itok=KuJy5IA3')`,
             backgroundPosition:'center',
             backgroundRepeat:'no-repeat',
             backgroundSize:'cover',
            }} className='mainPrinPic'></div>
            <div className='princContent'>
             <div className='icons01'>
              <Twitter style={{cursor:'pointer'}}/>
              <Facebook style={{cursor:'pointer'}}/>
              <LinkedIn style={{cursor:'pointer'}}/>
              <Mail style={{cursor:'pointer'}}/>
             </div>
             <div className='main002'>
                 <div className='mainFirst'>
                 <span className='main002Head'>Vice-Chancellor</span>
                 <span className='main003Head'>Prof. Abdullahi Liman Tukur (Phd,Msc)</span>
                 <p>
                 Professor Louise Richardson became Vice-Chancellor of the University of 
                 Oxford on 1 January 2016, having previously served as Principal and Vice-Chancellor
                  of the University of St Andrews, Scotland, for seven years. On 2 June 2022, 
                  Louise Richardson was appointed a Dame Commander of the Most Excellent Order of the 
                 British Empire (DBE) in recognition of her service to Higher Education.
                 </p>
                 </div>


                 <div className='mainSecond'>
                     <List>
                     <div>
<ListItemButton style={{
    color:'black'
}} component="a" href="#simple-list">
  <ListItemText primary='Vice Chancellor' />
</ListItemButton>
<Divider style={{backgroundColor:'#f9f9f9'}}/>
 </div>

 <div>
<ListItemButton style={{
    color:'black'
}} component="a" href="#simple-list">
  <ListItemText primary='DVC Admin' />
</ListItemButton>
<Divider style={{backgroundColor:'#f9f9f9'}}/>
 </div>

 <div>
<ListItemButton style={{
    color:'black'
}} component="a" href="#simple-list">
  <ListItemText primary='DVC Academics' />
</ListItemButton>
<Divider style={{backgroundColor:'#f9f9f9'}}/>
 </div>

 <div>
<ListItemButton style={{
    color:'black'
}} component="a" href="#simple-list">
  <ListItemText primary='Registrer' />
</ListItemButton>
<Divider style={{backgroundColor:'#f9f9f9'}}/>
 </div>

 <div>
<ListItemButton style={{
    color:'black'
}} component="a" href="#simple-list">
  <ListItemText primary='Bursar' />
</ListItemButton>
<Divider style={{backgroundColor:'#f9f9f9'}}/>
 </div>

 <div>
<ListItemButton style={{
    color:'black'
}} component="a" href="#simple-list">
  <ListItemText primary='Librarian' />
</ListItemButton>
<Divider style={{backgroundColor:'#f9f9f9'}}/>
 </div>
                     </List>
                 </div>
                
             </div>
            </div>
        </StyledContainer>
    )
}
