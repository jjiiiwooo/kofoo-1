import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";


const Wrapper = styled.div`
  //데스크탑
  width: 1440px;
  height: 1024px;
  margin: 0 auto;

//모바일
 @media (max-width:768px) {
  width: 375px;
  flex-grow: 0;
  padding: 126px 51px 199px 0;
 };


`;

const StyledButtonL = styled.button`
  //데스크탑
  position: absolute;
  left: 20.76%;
  right: 23.4%;
  top: 56.45%;
  bottom: 30.76%;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  font-size: 90.7199px;
  line-height: 127px;
  background: #C5DBFC;
  border-radius: 50px;

  //모바일
  @media (max-width:768px) {
    position: absolute;
    width: 254px;
    height: 59px;
    margin: 70px 10px 20px 10px;
    padding: 7px 59px 18px 60px;
    border-radius: 20px;
    background: #C5DBFC;
    font-family: Inter;
    font-size: 32.2px;
    font-weight: 800;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.4;
    letter-spacing: normal;
    text-align: center;
    color: #000;
};
  
`;

const StyledButtonS = styled.button`

  //데스크탑
  position: absolute;
  left: 20.76%;
  right: 23.4%;
  top: 79.49%;
  bottom: 7.71%;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  font-size: 90.7199px;
  line-height: 127px;
  background: #FBCCCC;
  border-radius: 50px;

  @media (max-width:768px) {
    width: 254px;
    height: 59px;
    margin: 10px 10px 20px 10px;
    padding: 7px 59px 18px 60px;
    border-radius: 20px;
    background-color: #fbcccc;
    font-family: Inter;
    font-size: 32.2px;
    font-weight: 800;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.4;
    letter-spacing: normal;
    text-align: center;
    color: #000;
  };


`;

const Styledlogo = styled.img`
  //데스크탑
  position: absolute;
  width: 50%;
  height: 50%;
  left: 23%;
  top: 10%;

  @media (max-width:768px) {
    position: absolute;
    width: 339px;
    height: 250px;
    left: 44px;
    top: 200px;
  }

`;

function Home() {
  const navigate = useNavigate();
  const logo = "/img/logo.png";

  return (
      <Wrapper>
      <Styledlogo img src={logo} alt=" "/>
      <StyledButtonL title="로그인" onClick={()=>{navigate("login");}}>Login</StyledButtonL>
      <StyledButtonS title="회원가입" onClick={()=>{navigate("signup");}}>Signup</StyledButtonS>
    </Wrapper>
    
  )
}
export default Home;

