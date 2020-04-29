import React from 'react';
import styled from "styled-components";
import PeoplesContent from "../PeoplesContent";

const Content = styled.div`
  width: 100%;
  height: 180vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.label`
  font-size: 27px;
  font-weight: bold;
`;

const Description = styled.label`
  font-size: 20px;
`;

const InputFilter = styled.div`
  width: 90%;
  height: 15vh;
  background: #fff;
  display: flex;
  margin-top: 10vh;
  align-items: center;
  border-bottom: solid 1px gray; 
`;

const CountryBox = styled.div`
  width: 20vw;
  height: 5vh;
  background: #dadada;
  display: flex;
  border-radius: 5px;
  justify-content: space-between;
  margin-right: 30px;
  margin-left: 10px;
`;

const MiniBox = styled.div`
  background: trasnparent;
  width: 33.3%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const SortBox = styled.div`
  width: 13vw;
  height: 5vh;
  background: #dadada;
  border-radius: 5px;
  margin: 0 10px;
  display: flex;
`;

const MiniSortBox = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  label{
    cursor: pointer;
  }
`;

function Index() {
  return (
    <Content>
        <Title>Our Tutors</Title>
        <Description>We have more than 100 tutors from various disciplines ready to match with you.</Description>
        <InputFilter>
          <label style={{fontWeight: "bold"}}>Filter by:</label>
          <CountryBox>
            <MiniBox>Liverpool</MiniBox>
            <MiniBox style={{borderRight: "solid gray 1.5px", borderLeft: "solid gray 1.5px"}}>
              London
            </MiniBox>
            <MiniBox>Manchester</MiniBox>
          </CountryBox>
          <label style={{fontWeight: "bold"}}>Sort by:</label>
          <SortBox>
            <MiniSortBox style={{background: "#2c7f4f", borderRadius: "5px 0 0 5px", color: "#fff"}}>
              <label>Name</label>
            </MiniSortBox>
            <MiniSortBox style={{borderRadius: "0 5px 5px 0"}}>
              <label>City</label>
            </MiniSortBox>
          </SortBox>
        </InputFilter>
        <PeoplesContent/>

    </Content>
  );
}

export default Index;