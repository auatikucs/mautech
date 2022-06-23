import { Divider } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const StyledContainer=styled.div`
min-height:70vh;
min-width: 100%;
background-color:white;
margin-top: 165px;
display: flex;
flex-direction: row;
padding: 20px;
.hodDet{
    width:30%;
    height:60vh;
    border: 1px solid rgba(221, 221, 221, 1);
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
        width: 90%;
        height: 60%;
        margin-top: 28px;
      
    }
    h3,p{
        line-height: 10px;
    }
    span{
        color: lightgray;
    }
}
.hodMainDet{
    width: 60%;
    margin-left: auto;
    margin-right: auto;
    min-height: 70vh;
    background-color:white;
    overflow: hidden;
    border: 1px solid lightgray;
    .headMainDet{
        height: 43px;
        width: 100%;
        background-color: rgba(229, 202, 202, 1);
        display: flex;
        align-items: center;
        padding: 10px;
    }
    .detTable{
        min-height: 40px;
        width: 100%;
        border-bottom: 1px solid lightgray; 
        display: flex;
        flex-direction: row;
        .detLabel{
            width: 30%;
            display: flex;
            justify-content: center;
            align-items: center;
            border-right: 1px solid lightgray;

        }
        .detCon{
            width: 70%;
            display: flex;
            justify-content: center;
            align-items: center;
           p{
               margin: 20px;
           }
        }
    }
}
`;
export default function Staff() {
    return (
        <StyledContainer>
         <div className='hodDet'>
             <img src={require('../assets/domy.jpeg')} alt='hod'/>
             <h3>Dr. Etemi Joshua Garba</h3>
             <Divider style={{width:'100%'}}/>
             <p>H O D Computer Science</p>
             <Link to='/'>View full CV</Link>


         </div>
         <div className='hodMainDet'>
             <div className='headMainDet'>
                 <h4>BASIC INFORMATION</h4>
             </div>
             <div className='detTable'>
              <div className='detLabel'>
                  <p>Email</p>
              </div>
              <div className='detCon'>
                  <p>ejgarba@mau.edu.ng</p>
              </div>
            </div>

            <div className='detTable'>
              <div className='detLabel'>
              Qualification
              </div>
              <div className='detCon'>
                  <p>PhD</p>
              </div>
            </div>


            <div className='detTable'>
              <div className='detLabel'>
              Specialization
              </div>
              <div className='detCon'>
                  <ol>
                      <li>Software design/development/engineering</li>
                      <li>Web Design, Hosting and Digital Content Management;</li>
                  </ol>
              </div>
            </div>


            <div className='headMainDet'>
                 <h4>PUBLICATIONS</h4>
             </div>
             <p>
                 E. J. Garba, G. M. Wajiga, Music/Multimedia Technology: Modeling 
                 and Simulation of the Hybridized Interactive Algorithmic Composition 
                 Model, Software Engineering. Vol. 2, No. 2, 2014, pp. 15-21. doi: 10.11648/j.
                 se.20140202.11. http://www.sciencepublishinggroup.com/j/se

                 </p>
         </div>
        </StyledContainer>
        
    )
}


;
