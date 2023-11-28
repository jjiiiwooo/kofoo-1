import axios from 'axios';
import {useState} from 'react';
import { useNavigate } from "react-router-dom";
import styled from "styled-components";



const Wrapper = styled.div`
  position: relative;
  width: 1440px;
  height: 1024px;
  margin: 0 auto;

  background: #FFFFFF;
`;

const Styledsubmitbutton = styled.button`
  position: absolute;
  width: 337px;
  height: 81px;
  left: 200px;
  top: 980px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 58.0607px;
  line-height: 81px;


  background: #C5DBFC;
  border-radius: 20px;

`;


const Logintext = styled.div`
position: absolute;
width: 661.5px;
height: 75.6px;
left: 550px;
top: 296px;

font-family: 'Inter';
font-style: normal;
font-weight: 900;
font-size: 63.504px;
line-height: 89px;

`;

const Logo = styled.img`
position: absolute;
width: 659.2px;
height: 281.6px;
left: 348px;
top: 27px;

`;

const TextE = styled.div`
position: absolute;
width: 712.5px;
height: 46px;
left: 200px;
top: 436px;

font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 40.504px;
line-height: 89px;

`;

const TextP = styled.div`
position: absolute;
width: 712px;
height: 46px;
left: 200px;
top: 670px;

font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 40.896px;
line-height: 70px;
`;

const EmailForm = styled.input`
  box-sizing: border-box;

  position: absolute;
  width: 990px;
  height: 80px;
  left: 210px;
  top: 532px;
  font-size:46.896px;

  background: #FFFDFD;
  border: 1px solid #000000;
`;

const PsForm = styled.input`
  box-sizing: border-box;

  position: absolute;
  width: 990px;
  height: 80px;
  left: 210px;
  top: 765px;
  font-size:46.896px;

  background: #FFFDFD;
  border: 1px solid #000000;

`;

const EmailError = styled.div`
  position: absolute;
  width: 500px;
  height: 51px;
  left: 231px;
  top: 606px;

  font-family: 'Inter';
  font-style: italic;
  font-weight: 700;
  font-size: 31.752px;
  line-height: 44px;

  color: #EA0909;
`;

const PsError = styled.div`
  position: absolute;
  width: 1000px;
  height: 51px;
  left: 215px;
  top: 845px;

  font-family: 'Inter';
  font-style: italic;
  font-weight: 700;
  font-size: 31.752px;
  line-height: 44px;
  color: #EA0909;
`;



function Login() {
  const logo = "/img/logo.png"
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailValid, setEmailValid] = useState(false);
  const [pwValid,setPwValid] = useState(false);

  //이메일 유효성 검사 
  const handleEmail = (e) => {
    setEmail(e.target.value);

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(regex.test(email)) {
      setEmailValid(true);
    }
    else {
      setEmailValid(false);
    }
  }


  //axios를 이용해 버튼 클릭시 데이터 전송
  const handleConfirmButton = () => {
    axios.get(`http://localhost:3001/Users?email=${email}&password=${password}`)
    .then(response=> {
      if(response.data.length > 0) {
        alert("login Success");
      }else {
        alert('login failure');
        navigate('/');
      }
    })
    .catch(error => {
      alert('login failure');
    });
  };
  

  //비밀번호
  const handlePassword = (e) => {
    setPassword(e.target.value);

    const regex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;

    if(regex.test(password)) {
      setPwValid(true);
    }
    else {
      setPwValid(false);
    }
  }

  const gotomain = () => {
    navigate("main");
  }

  return (
    <Wrapper>
      <div >
      <Logintext>LOGIN</Logintext>
      <Logo img src={logo} alt=''/>

      <div>
        <TextE>EMAIL</TextE>
        <div>
          <EmailForm
            type='text'
            className='input'
            placeholder="test@gmail.com"
            value={email}
            onChange={handleEmail}/>
        </div>

      <EmailError>
        {
          !emailValid && email.length<0 && (
            <div>Please enter a valid e-mail </div>
          )}
      </EmailError>

      <TextP>PASSWORD</TextP>
        <div>
          <PsForm
          type='password'
          className='input' 
          value={password}
          onChange={handlePassword}/>
        </div>
        <PsError>
          {
            !pwValid && password.length >0 && (
              <div> Please enter at least 8 characters including English and numbers. </div>
            )}
       </PsError>
      </div>

      <div>
        <Styledsubmitbutton onClick={() =>{handleConfirmButton(); gotomain();}} >
          SUBMIT
        </Styledsubmitbutton>
      </div>
    </div>  
    </Wrapper>
    
  )
}

export default Login