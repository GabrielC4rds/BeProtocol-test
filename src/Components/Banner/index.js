import React from 'react';
import styled from "styled-components";

const Content = styled.div`
  width: 100%;
  height: 60vh;
  background: #dbdcdc;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Infs = styled.div`
  height: 60%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Texts = styled.div`
  display: flex;
  flex-direction: column;
  height: 50%;
  justify-content: space-between;
`;

const Title = styled.label`
  font-weight: bold;
  font-size 50px;
`;

const Description = styled.label`
  font-size: 30px;
`;

const GetStartBtn = styled.button`
  width: 17vw;
  height: 8vh;
  background: #2c7f4f;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
`;


function Index() {
  return (
    <Content>
      <Infs>
        <Texts>
          <Title>The place where Tutors and Students meet</Title>
          <Description>Find out who can help you take your education to the next level.</Description>
        </Texts>
        <GetStartBtn>Get started now</GetStartBtn>
      </Infs>
    </Content>
  );
}

export default Index;