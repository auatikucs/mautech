import React from 'react'
import styled from 'styled-components'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Input from '@mui/material/Input';
import SearchIcon from '@mui/icons-material/Search'
import MyLinks from '../components/MyLinks';

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
    return (
        <StyledContainer>
            <div className='finderContent'>
            <Input
            style={{
                width:'80%',
                marginLeft:'auto',
                marginRight:'auto',
                marginTop:20
            }}
           placeholder='Search For Your Course'
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon/>
            </InputAdornment>
          }
        />

        <div className='searchResult'>
         <MyLinks route='/course/cs' link='Computer Science'/>
         <MyLinks route='/course/cs' link='Computer Science'/>
         <MyLinks route='/course/cs' link='Computer Science'/>
        </div>
            </div>
        </StyledContainer>
    )
}
