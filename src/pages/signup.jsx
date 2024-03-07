import React from 'react'
import styled from 'styled-components'
import BackgroundImage from '../components/backgroundImage';
import Header from '../components/Header';

function Signup() {
  return (
      <Container>        
        <BackgroundImage/>
        <div className="content">
        <div className="body flex column a-center j-center">
          <Header/>
            <div className="text flex column">
                <h1>Unlimited Movies , TV shows and more</h1>
                <h4>Watch anywhere .Cancel anytime</h4>
                <h6>Ready to watch ? Enter your email to create or restart membership</h6>
            </div>
            <div className="form">
                <input type="email" placeholder='Email Adress' name='email'/>
                <input type="password" placeholder='Password' name='password'/>
                <button>Get started</button>
            </div>
            <button>LogIn</button>
        </div>
        </div>
    </Container>
  )
}

export default Signup

const Container=styled.div`

 position:relative;
.content{
    position:absolute;
    top:0;
    left:0;
    background-color:rgba(0,0,0,0.5);
    height:100vh;
    width:100vw;
    display:grid;
    grid-template-rows:15vh 85vh;
}
`;