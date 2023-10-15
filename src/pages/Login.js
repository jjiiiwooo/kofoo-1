import React, {useState, useEffect } from 'react';

const database = {
  email1: 'test1@google.com',
  pw1: '1z1z1z1z1',

  email2: 'test2@google.com',
  pw2:'2c2c2c2c2c'
};


  function Login() {

  const [email, setEmail] = useState(' ');
  const [pw, setPw] = useState(' ');

  const [emailValid, setEmailValid] = useState(false);
  const [pwValid,setPwValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);

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

  const onClickConfirmButton = () => {
    if(email === database.email && database.pw) {
      alert('Login Success');
    }
    else {
      alert('Unregistered membership information');
    }
  };
  
  useEffect (() => {
    if(emailValid && pwValid) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  },[emailValid,pwValid]);

  const handlePassword = (e) => {
    setPw(e.target.value);

    
    const regex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;

    if(regex.test(pw)) {
      setPwValid(true);
    }
    else {
      setPwValid(false);
    }
  }
  return (
    <div >
      <div>
        <div>EMAIL</div>
        <div>
          <input 
            type='text'
            className='input'
            placeholder="test@gmail.com"
            value={email}
            onChange={handleEmail}/>
        </div>

      <div>
        {
          !emailValid && email.length>0 && (
            <div>Please enter a valid e-mail </div>
          )}
      </div>

      <div>PASSWORD</div>
        <div>
          <input
          type='password'
          className='input' 
          placeholder='At least 8 characters including English and numbers'
          value={pw}
          onChange={handlePassword}/>
        </div>
        <div>
          {
            !pwValid && pw.length >0 && (
              <div> Please enter at least 8 characters including English and numbers. </div>
            )}
       </div>
      </div>

      <div>
        <button onClick={onClickConfirmButton} disabled={notAllow} className="buttomButton">
          SUBMIT
        </button>
      </div>
    </div>
  )
}

export default Login