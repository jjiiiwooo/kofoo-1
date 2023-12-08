import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";


const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const StyledButtonL = styled.button`
  width: 80%;
  height: 20%;
  padding:2%;
  border-radius: 20px;
  background-color: #c5dbfc;
  font-family: Inter;
  font-size: 8vw;
  font-weight: 800;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  text-align: center;
  color: #000;
  margin:10% 10% 10% 10%;
`;

const StyledButtonS = styled.button`
  width: 80%;
  height: 20%;
  border-radius: 20px;
  background-color: #fbcccc;
  font-family: Inter;
  font-size: 8vw;
  font-weight: 800;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  text-align: center;
  color: #000;
  padding:2%;
  margin:10% 10% 10% 10%;

`;

const Styledlogo = styled.img`
  width: 90%;
  height: 30%;
  margin:3%;
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

