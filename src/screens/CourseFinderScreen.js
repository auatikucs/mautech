import React, { useState } from 'react'
import styled from 'styled-components'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Input from '@mui/material/Input';
import SearchIcon from '@mui/icons-material/Search'
import EmptyIcon from '@mui/icons-material/HourglassEmpty'
import MyLinks from '../components/MyLinks';
import { createTheme,ThemeProvider } from '@mui/material/styles';

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
    const [coursesList,setCoourses]=useState([
        'Fisheries',
        'Animal Science and Range Management',
        'Crop Production',
        'Food Science and Technology',
        'Agricultural Economics and Extension',
        'Crop Production and Horticulture',
        'Soil Science',
        'Agricultural & Env. Engineering',
        'Chemical Engineering',
        'Civil Engineering',
        'Electrical Electronic',
        'Mechanical Engineering',
        'Biochemistry',
        'Biotechnology',
        'Biological Science',
        'Science Laboratory Technology',
        'Microbiology',
        'Plant Science',
        'Zoology',
        'Chemistry',
        'Computer Science',
        'Geology',
        'Mathematics',
        'Physics',
        'Statistics &Operations Research',
        'Architecture',
        'Building',
        'Geography',
        'Industrial Design',
        'Geoinformatics',
        'Urban&Regional Planning',
        'Accountancy',
        'Banking & Finance',
        'Economics',
        'Information Technology',
        'Library & Information Science',
        'Management Technology',
        'Science Education',
        'Technology Education ',
        'MBBS'
    ])
    const sortedDepartments=coursesList.filter(dpt=>dpt.toLocaleLowerCase().includes(mySearch.toLocaleLowerCase()))
    
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
            sortedDepartments.map(dpt=>(
            <MyLinks key={dpt} route={`/course/${dpt}`} link={dpt}/>
            ))
        }
         
         {
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
         
        </div>
            </div>
        </StyledContainer>
        </ThemeProvider>
    )
}
