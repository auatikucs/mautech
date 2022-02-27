import React, { useEffect, useRef, useState } from 'react'

import styled from 'styled-components'

const MyNav=styled.nav`
min-height:100px;
min-width: 100%;
position: fixed;
top: 0;
transition: all 0.5s;
transform: translateY(0px);

/* background: rgba( 255, 255, 255, 0.25 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 5px );
-webkit-backdrop-filter: blur( 5px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 ); */
background:red;

`;
export default function Nav() {
    const navRef=useRef()
    const [show, setShow] = useState('show')
    let lastScroll=window.scrollY
    const controlNavbar = () => {
        if (window.scrollY >lastScroll ) {
            console.log(navRef.current)
            lastScroll = window.scrollY
            setShow('show')
        }
        if(window.scrollY<lastScroll){
          setShow('hide')
          console.log(navRef.current)
          lastScroll = window.scrollY
        }
        
    }
  
    useEffect(() => {
        window.addEventListener('scroll', controlNavbar)
        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    }, [])



    return (
        <MyNav ref={navRef} className={`mynav ${show}`}>
          <h1>Nav</h1>  
        </MyNav>
    )
}
