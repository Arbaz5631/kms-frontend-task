import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { KmsAction } from "../store";
const SignUpMainDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color:#e2f9f3;
padding:100px;
width:300px;
border-radius:10px;
margin:100px 0px 0px 450px ;
`;
const H3 = styled.h3`
font-size:24px;
color:#54785a;
`;
const Input = styled.input`
width: 300px;
border:solid 1px #eef3f2;
border-radius:8px;
padding:15px;
margin-top: 10px;
`;
const Button = styled.button`
width: 200px;
background-color:#a6a8ee;
padding:5px ;
border-radius:6px;
border:1px solid #f4c5f8;
color: #f4c5f8;
margin-top: 10px;
`;
const P = styled.p`
fot-size:13px;
color:red;
`;
const P2 = styled.p`
fot-size:13px;
`;
function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({ password1: "", password2: "" });
  const [error, setError] = useState({
    emailError: true,
    passwordError: true,
    isSignUp: false

  });
  const dispatch = useDispatch()
  const userLoggerIn = useSelector(state => state.kmsStore.email)
  useEffect(() => {
    setError({ ...error });
  }, []);
  const onChangeEvent = (event) => {
    event.target.id === "email" && setEmail(event.target.value);
    event.target.id === "password1" && setPassword({ ...password, password1: event.target.value });
    event.target.id === "password2" && setPassword({ ...password, password2: event.target.value });
  };
  const onSubmit = () => {
    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      );
    const passwordValue = password.password1.length > 5 && password.password2.length > 5;

    setError({
      emailError: emailRegex,
      passwordError: passwordValue,
      isSignUp: false
    });
    if (emailRegex && passwordValue) {
      setError({ emailError: true, passwordError: true, isSignUp: true });
    }
    if (password.password1 !== password.password2) {
      alert("Password not match !!!")
      setError({ ...error, isSignUp: false })

    }
    dispatch(KmsAction.email(email))
    dispatch(KmsAction.password(password.password1))
  };
  return (
    <SignUpMainDiv>
      <H3>SignUp Page </H3>
      <Input
        placeholder="Please Enter Your Email"
        id="email"
        onChange={onChangeEvent}
        value={email}
      />
      {!error.emailError && <P>Please Enter Correct Email</P>}
      <Input
        placeholder="Please Enter Your Password"
        id="password1"
        type="password"
        onChange={onChangeEvent}
        value={password.password1}
      />
      {!error.passwordError && <P>Please Enter Strong Password</P>}
      <Input
        placeholder="Please Enter Password Again"
        id="password2"
        type="password"
        onChange={onChangeEvent}
        value={password.password2}
      />
      {!error.passwordError && <P>Please Enter Strong Password</P>}
      <Button onClick={onSubmit}>SignUp</Button>
      {error.isSignUp && <P2>SignUp Successfull...!!!</P2>}
      <P2>
        Already registered <Link to="/login">Login</Link>
      </P2>
    </SignUpMainDiv>
  );
}

export default SignUp;
