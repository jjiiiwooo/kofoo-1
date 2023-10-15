import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";


const Wrapper = styled.div`
  width:100%;
  max-widthL720px;
`;

const StyledButtonL = styled.button`
  padding:8px 16px;
  font-size:16px;
  border-width:1px;
  border-radius:8px;
  cursor:pointer;

  background: #C5DBFC;
  border-radius: 30px;

`;

const StyledButtonS = styled.button`
  padding:8px 16px;
  font-size:16px;
  border-width:1px;
  border-radius:8px;
  cursor:pointer;

  background-color:#FBCCCC;
  border-radius: 30px;

`;

function Home() {
  const navigate = useNavigate();
  const logo = "/img/logo.png"

  return (
    <Wrapper>
      <img src={logo} alt=''/>
      <StyledButtonL title="로그인" onClick={()=>{navigate("login");}}>Login</StyledButtonL>
      <StyledButtonS title="회원가입" onClick={()=>{navigate("signup");}}>Signup</StyledButtonS>

    </Wrapper>
  )
}
export default Home;

