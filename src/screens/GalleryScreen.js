import React from 'react'
import styled from 'styled-components'
import MainGallery from '../sub-components/MainGallery';

const StyledContainer=styled.div`
margin-top:100px;
display:grid;
grid-template-columns:1fr 1fr 1fr 1fr;
padding:20px;
grid-gap:20px;

`;
export default function GalleryScreen() {
  return (
    <StyledContainer>
        <MainGallery/>
        <MainGallery/>
        <MainGallery/>
        <MainGallery/>
        <MainGallery/>
        <MainGallery/>
        <MainGallery/>
        <MainGallery/>
        <MainGallery/>
    </StyledContainer>
  )
}
