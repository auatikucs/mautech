import React,{useEffect} from 'react'
import styled from 'styled-components'


const StyledContainer=styled.div`
margin-top:110px;
min-height: 80vh;
width:100%;
background-color:white ;
.indInter{
    display:grid ;
    grid-template-columns:1fr 1fr 1fr ;
    width:90%;
    margin-left:auto ;
    margin-right: auto;
    margin-top:20px;
    padding: 20px;
    grid-gap:20px;

    .indINterHead{
        text-align: center;
        grid-column:1/4 ;
        font-size:30px;
        font-weight:bold ;
        
    }
    .indIntSty{
        text-align: center;
        grid-column:1/4 ;
        font-weight:bold ; 
        min-height:10px;
        min-width:100px ;
        max-width:100px ;
        max-height: 10px;
        background-color:#D07348;
        margin-left:auto ;
        margin-right:auto ;
    }
    .indCardBtn{
    grid-column:1/4;
    min-height:100px;
    min-width:100%;
    background-color:white;
    display: flex;
    justify-content:center ;
    align-items:center ;
    flex-direction:column ;
    img{
        width:100px;
        height:100px ;
        cursor: pointer;
    }
}
}
.indCardInte{
    position:relative ;
    width:100%;
    height:70vh;
    background-color:white;
    margin-top:20px;
    display:flex ;
    flex-direction:column ;
    box-shadow:0px 0px 2px rgba(0,0,0,0.5) ;
    img{
        min-height:40vh;
        max-height:40vh;
        width:100%;
    }
    span{
        font-size:20px;
        font-weight:bold;
        padding:10px;
    }
    p{
    font-size:13px;
    text-align:justify;
    margin-left:20px;
    margin-right:20px ;
    }
    .indCardSt{
        position:absolute;
        width:100px;
        height:100px;
        background-color:rgba(208, 115, 72, 0.8);
        top:0px;
        margin-top:40px;
        display:flex;
        justify-content:center;
        align-items:center;
        span{
            color:white;
            font-weight:bold;
        }
    }

}
@media only screen 
and (min-device-width : 320px) 
and (max-device-width : 480px) {
    .indInter{
    display:grid ;
    grid-template-columns:1fr;
    width:90%;
    margin-left:auto ;
    margin-right: auto;
    margin-top:20px;
    padding: 0px;
    grid-gap:0px;

    .indINterHead{
        text-align: center;
        grid-column:1/2 ;
        font-size:30px;
        font-weight:bold ;
        
    }
    .indIntSty{
        text-align: center;
        grid-column:1/2 ;
        font-weight:bold ; 
        min-height:10px;
        min-width:100px ;
        max-width:100px ;
        max-height: 10px;
        background-color:#D07348;
        margin-left:auto ;
        margin-right:auto ;
    }
    .indCardBtn{
    grid-column:1/2;
    min-height:100px;
    min-width:100%;
    background-color:white;
    display: flex;
    justify-content:center ;
    align-items:center ;
    flex-direction:column ;
    img{
        width:100px;
        height:100px ;
        cursor: pointer;
    }
}
}
}
`;

export default function Intervention() {
    useEffect(()=>{
        window.scrollTo({
            top:0,
            behavior: 'smooth',
          })
      
       
    },[])
  return (
    <StyledContainer>
        <div className='indInter'>
            <span className='indINterHead'>
                TETFUND Intervention
            </span>
            <span className='indIntSty'></span>
            <div className='indCardInte'>
            <div className='indCardSt'>
             <span>02,OCT</span>
            </div>
             <img src='https://guardian.ng/wp-content/uploads/2020/06/TETfund.jpg' alt='pic'/>
             <span className='titleIndInt'>Construction Of Fire Service</span>
             <p>
             Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
             when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
             </p>
            </div>




            <div className='indCardInte'>
            <div className='indCardSt'>
             <span>02,OCT</span>
            </div>
             <img src='https://blog.owis.org/hubfs/Secondary.jpg' alt='pic'/>
             <span className='titleIndInt'>New Multipurpose Hall Constructed</span>
             <p>
             Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
             when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
             </p>
            </div>





            <div className='indCardInte'>
            <div className='indCardSt'>
             <span>02,OCT</span>
            </div>
             <img src='https://www.thenicheng.com/wp-content/uploads/2021/11/website.jpg' alt='pic'/>
             <span className='titleIndInt'>TETFUND Website Sponsorship!</span>
             <p>
             Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
             when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
             </p>
            </div>

        <div className='indCardBtn'>
          <img src={require('../assets/arr.png')} alt='img' />
        </div>
        </div>















        <div className='indInter'>
            <span className='indINterHead'>
                PTDF Intervention
            </span>
            <span className='indIntSty'></span>
            <div className='indCardInte'>
            <div className='indCardSt'>
             <span>02,OCT</span>
            </div>
             <img src='https://guardian.ng/wp-content/uploads/2020/06/TETfund.jpg' alt='pic'/>
             <span className='titleIndInt'>Construction Of Fire Service</span>
             <p>
             Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
             when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
             </p>
            </div>




            <div className='indCardInte'>
            <div className='indCardSt'>
             <span>02,OCT</span>
            </div>
             <img src='https://blog.owis.org/hubfs/Secondary.jpg' alt='pic'/>
             <span className='titleIndInt'>New Multipurpose Hall Constructed</span>
             <p>
             Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
             when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
             </p>
            </div>





            <div className='indCardInte'>
            <div className='indCardSt'>
             <span>02,OCT</span>
            </div>
             <img src='https://www.thenicheng.com/wp-content/uploads/2021/11/website.jpg' alt='pic'/>
             <span className='titleIndInt'>TETFUND Website Sponsorship!</span>
             <p>
             Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
             when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
             </p>
            </div>

        <div className='indCardBtn'>
          <img src={require('../assets/arr.png')} alt='img' />
        </div>
        </div>
    </StyledContainer>
  )
}
