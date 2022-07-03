import React from 'react'
import styled from 'styled-components'

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
        background-color: red;
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
        
    }

}
`;
export default function Principal() {
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


                 <div className='mainSecond'></div>
                
             </div>
            </div>
        </StyledContainer>
    )
}
