import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Input from '@mui/material/Input';
import SearchIcon from '@mui/icons-material/Search'
import EmptyIcon from '@mui/icons-material/HourglassEmpty'
import MyLinks from '../components/MyLinks';
import { createTheme,ThemeProvider } from '@mui/material/styles';
import DepLink from '../components/DepLink';

const StyledContainer=styled.div`
margin-top: 130px;
min-height: 80vh;
width: 100%;
background-color: white;
.finderContent{
    width: 80%;
    min-height: 80vh;
    margin-left: auto;
    margin-right: auto;
    background-color:white;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    .searchResult{
        width: 80%;
        min-height: 100px;
        background-color:white;
        margin-left: auto;
        margin-right: auto;
        margin-top: 20px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
        .empty{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            min-height: 50vh;
            width: 100%;
        }
    }

}
@media only screen 
and (min-device-width : 320px) 
and (max-device-width : 480px) {
    .finderContent{
        width: 90%;
        .searchResult{
            width: 90%;
            grid-template-columns: 1fr;
        }
        
    }
}
`;
export default function CourseFinderScreen() {
    useEffect(()=>{
        window.scrollTo({
            top:0,
            behavior: 'smooth',
          })
    },[])
    const theme = createTheme({
        palette: {
          primary: {
            light: '#d07348',
            main: '#d07348',
            dark: '#d07348',
            contrastText: '#fff',
          },
          secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
          },
        },
      });

    const [mySearch,setSearch]=useState('')
    const [loading,setLoading]=useState(true)
    const [coursesList,setCoourses]=useState([])
    const sortedDepartments=coursesList.filter(dpt=>dpt.departmentName.toLocaleLowerCase().includes(mySearch.toLocaleLowerCase()))
    useEffect(()=>{
        fetch('https://new-modibbo-adama.herokuapp.com/admin/get-all-department')
        .then(res => {
            res.json()
                .then(data => {
                    setLoading(false)
                    setCoourses(data.message)
                    
                })
        }).catch(err=>{
            
        })
    },[])

    return (
        <ThemeProvider theme={theme}>
        <StyledContainer>
            <div className='finderContent'>
            <Input
            color='primary'
            value={mySearch}
            onChange={(e)=>{
                setSearch(e.target.value)
            }}
            style={{
                width:'80%',
                marginLeft:'auto',
                marginRight:'auto',
                marginTop:20
            }}
           placeholder='Search For Courses'
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon/>
            </InputAdornment>
          }
        />

        <div className='searchResult'>
        {
            sortedDepartments.map(dep=>(
                <DepLink route={`/course/${dep.departmentId}`} key={dep.departmentId} link={dep.departmentName} id={dep.departmentId}/>
            ))
        }
         
         {
             !loading&&
             sortedDepartments.length==0&&(
                 <div className='empty'>
                <EmptyIcon style={{
                    width: 50,
                    height:50
                }}/>
                <h4>No Record Found!!!</h4>
                 </div>
             )
         }
          {
             loading&&
             sortedDepartments.length==0&&(
                 <div className='empty'>
                <EmptyIcon style={{
                    width: 50,
                    height:50
                }}/>
                <h4>Loading Records......</h4>
                 </div>
             )
         }
         
        </div>
            </div>
        </StyledContainer>
        </ThemeProvider>
    )
}
