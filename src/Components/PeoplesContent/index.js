import React from 'react';
import styled from "styled-components";
let json = require('../../Services/cards.json');


const Content = styled.div`
  width: 90%;
  height: 110vh;
  display: flex;
  background: transparent;
  padding: 20px 0;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const PeoplesCard = styled.div`
  width: 18vw;
  height: 50vh;
  border-radius: 5px; 
`;

const Top = styled.div`
  width: 100%;
  height: 40%;
  background: #f0f0f0;
  border-radius: 5px 5px 0 0;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

const Bottom = styled.div`
  width: 92.8%;
  height: 54.5%;
  background: #dfdfdf;
  border-radius: 0 0 5px 5px;
  padding: 10px 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

const NameTitle = styled.label`
  font-weight: bold;
  font-size: 18px;
`;

const CityBox = styled.div`
  width: 50%;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  font-size: 15px;
`;

const CityMiniBox = styled.div`
  width: 6vw;
  height: 50%;
  font-size: 13px;
  border-radius: 5px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StudentBox = styled.div`
  width: 90%;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  font-size: 15px;
`;

const StudentMiniBox = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
`;

const StudentIcon = styled.div`
  background: #f3f3f3;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: flex-end;
  justify-content: center; 
  border-radius: 50px;
  img{
    border-radius: 10px;
  }
`;

const ShowMoreBtn = styled.div`
  width: 17vw;
  height: 8vh;
  background: #dfdfdf;
  border: none;
  border-radius: 5px;
  color: #000;
  font-weight: bold;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

function Index() {
  return (
    <>
      <Content>
        {json.Cards.map(res => {
          return (
            <PeoplesCard>
              <Top>
                <img src="./images/user-photo.svg" />
              </Top>
              <Bottom>
                <NameTitle>
                  {res.Name}
                </NameTitle>
                <CityBox>
                  <label>City</label>
                  <CityMiniBox>
                    <label>{res.City}</label>
                  </CityMiniBox>
                </CityBox>
                <StudentBox>
                  <label>Students so far</label>
                  <StudentMiniBox>
                    <StudentIcon>
                      <img src="./images/student-photo.svg" />
                    </StudentIcon>
                    <StudentIcon>
                      <img src="./images/student-photo.svg" />
                    </StudentIcon>
                    <StudentIcon>
                      <img src="./images/student-photo.svg" />
                    </StudentIcon>
                    <StudentIcon>
                      <img src="./images/student-photo.svg" />
                    </StudentIcon>
                  </StudentMiniBox>
                </StudentBox>
              </Bottom>
            </PeoplesCard>
          )
        }
        )}
      </Content>
      <ShowMoreBtn>
        See all Tutors
      </ShowMoreBtn>
    </>
  );
}

export default Index;