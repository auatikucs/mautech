import React, { useEffect } from 'react'
import styled from 'styled-components'

const StyledContainer=styled.div`
width: 100%;
margin-top: 130px;
min-height: 100vh;
.campusImage{
    height: 90vh;
    width: 100%;
    background:url('https://res.cloudinary.com/nutscoders/image/upload/v1646557952/IMG_9585_mpdo2q.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    .campusHead{
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background-color: rgba(208,115,72,0.4);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
        
        .welcomeDean{
            margin-left: auto;
            width: 40%;
            background-color: rgba(0,0,0,0.5);
            margin-right: 30px;
            border-radius: 20px;
            margin-top:50%;
        }
        p{
            text-align: justify;
            margin-left: auto;
            margin-right: auto;
            width: 90%;
            color: white;
           

        }
        h1{
            text-align: center;
            color: white;
            font-weight: bolder;
            font-size: 40px;
            text-transform: uppercase;
        }
    }
}
@media only screen 
and (min-device-width : 320px) 
and (max-device-width : 480px) {
    margin-top: 100px; 
    
    .campusImage{
    .campusHead{
        position:relative;
        justify-content: flex-start;
        align-items: flex-start;
        
        .welcomeDean{
            margin-right: auto;
            width: 90%;
            p{
            text-align: justify;
            margin-left: auto;
            margin-right: auto;
            width: 90%;
            color: white;
           

        }
        h1{
            text-align: center;
            color: white;
            font-weight: bolder;
            font-size: 18px;
            text-transform: uppercase;
        }
        
        }
        
    }
}

}
`;
export default function CampusScreen() {
    useEffect(()=>{
        window.scrollTo({
            top:0,
            behavior: 'smooth',
          })
    },[])
    return (
        <StyledContainer>
        <div className='campusImage'>
         <div className='campusHead'>
        <div className='welcomeDean'>
        <h1>Welcome Message</h1>
          <p>
          The critical irreducible element is therefore learning whether in a formal 
          or in an informal way. Consequently, whenever learning takes place, education
           has equally taken place.
In reality, there is no watertight division between formal education and the informal 
aspects of education. Sometimes, we find that even within formal education settings there
 are informal aspects. Those who pursue the informal aspects along with the formal become 
 complete products while those who are strictly 
concerned only with what is written out in the curricula end up as defective products.
          </p>
        </div>
          
         </div>
        </div>
           
        </StyledContainer>
    )
}
