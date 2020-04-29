import React from 'react';
import styled from "styled-components";

const Content = styled.div`
    width: 97.3%;
    height: 10vh;
    background: #dbdcdc;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    align-items: center;
`;

const Right = styled.div`
  width: 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  label{
    cursor: pointer;
  }
 `;

const SignInBtn = styled.button`
  width: 8vw;
  height: 6vh;
  background: transparent;
  border: solid black 2px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  label{
    cursor: pointer;
  }
`;

function Index() {
  return (
    <Content>
      <img style={{ width: "10vw" }} src="./images/tutormatch-logo.svg" />
      <Right>
        <label>Become a Tutor</label>
        <SignInBtn>
          <label>Sign In</label>
        </SignInBtn>
      </Right>
    </Content>
  );
}

export default Index;