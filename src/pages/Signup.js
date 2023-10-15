import React from 'react';
import { useState,useEffect } from 'react';


const useInput = (defaultValue) => {
  const [value, setValue] = useState(defaultValue)
  const onChange = e => {
    setValue(e.target.value)
  }
  return {
    value,
    onChange,
  }
}

const validate = (input) => {
  const {useremail, password} = input
  const errors = {}

  if(useremail === '') {
    errors.useremail="Email not entered"
  }else if(!/^[a-z0-9%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i.test(useremail)) {
    errors.useremail = "Email entered is invalid."
  }

  if(!password) {
    errors.password="Password not entered"
  }else if(password.length < 8) {
    errors.password = "You must use a password of at least 8 characters."
  }

  return errors
}

const Signup = () => {
  const email = useInput(' ')
  const password = useInput(' ')
  const nickname = useInput(' ')
  const [submit,setSubmit] = useState(false)
  const [errors, setErrors] = useState({})

  const handleSubmit = e => {
    e.preventDefault()
    setSubmit(true)

    const input = {
      useremail : email.value,
      password : password.value,
      nickname : nickname.value
    }

    setErrors(validate(input))
  }

  useEffect(() => {
    if(submit) {
      if(Object.keys(errors).length === 0) {
        alert('Signup Success')
      }
      setSubmit(false)
    }
  },[errors,submit])

return (
  <form onSubmit={handleSubmit}>
    <h2>SIGNUP</h2>
    <ul>
      <li>
        <label htmlfor="useremail">EMAIL</label>
        <input type='text' name="useremail" {...email}/>
        {errors.useremail && <span>{errors.useremail}</span>}
      </li>

      <li>
        <label htmlfor="password">PASSWORD</label>
        <input type='password' name="password" {...password}/>
        {errors.password && <span>{errors.password}</span>}
      </li>

      <li>
        <label htmlfor="nickname">NICKNAME</label>
        <input type='text' name="nickname" {...nickname}/>
      </li>
      <li>
        <input type='submit' value="signup" disabled={submit} />
      </li>
    </ul>
  </form>
 )
} 

export default Signup 