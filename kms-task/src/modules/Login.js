import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {useSelector,useDispatch,RootStateOrAny,connect} from "react-redux";
import { KmsAction } from "../store";
import BarGraph from "./BarGraph";
// import RootState from "../store"
const LoginMainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e2f9f3;
  padding: 100px;
  width: 300px;
  border-radius: 10px;
  margin: 100px 0px 0px 450px;
`;
const H3 = styled.h3`
  font-size: 24px;
  color: #54785a;
`;
const Input = styled.input`
  width: 300px;
  border: solid 1px #eef3f2;
  border-radius: 8px;
  padding: 15px;
  margin-top: 10px;
`;
const Button = styled.button`
  width: 200px;
  background-color: #a6a8ee;
  padding: 5px;
  border-radius: 6px;
  border: 1px solid #f4c5f8;
  ${'' /* color: #f4c5f8; */}
  cursor: ${props=>props.isLoggedIn?"allowed":"not-allowed"};
  margin-top: 10px;
  ${'' /* cursor:not-allowed; */}
  
`;
const P = styled.p`
  fot-size: 13px;
  color: red;
`;
const P2=styled.p `
fot-size:13px;
`;

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const kmsStateIsLoggedIn=useSelector(state=>state.kmsStore.isLoggedIn)
  const kmsStateEmail=useSelector(state=>state.kmsStore.email)
  const kmsStatePassword=useSelector(state=>state.kmsStore.password)
  
  const [error, setError] = useState({
    emailError: true,
    passwordError: true,
    isLoggedIn: false,
  });
  
  useEffect(() => {
    setError({ ...error });
  }, []);
  const onChangeEvent = (event) => {
    event.target.id === "email" && setEmail(event.target.value);
    event.target.id === "password" && setPassword(event.target.value);
  };
  const onSubmit = () => {
    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      );
    const passwordValue = password.length >= 5;

    setError({
      emailError: emailRegex,
      passwordError: passwordValue,
      isLoggedIn: false,
    });
    if (emailRegex && passwordValue) {
      if(kmsStateEmail===email &&kmsStatePassword===password){
        setError({ emailError: true, passwordError: true, isLoggedIn: true });
        dispatch(KmsAction.isLoggedIn())
        // window.location.replace("/dashboard");
      }
      else{
        alert("Email id and password are incorrect !!")
      }
    } 
    
  };
  return (
    <LoginMainDiv>
      <H3>Login Page </H3>
      <Input
        placeholder="Please Enter Your Email"
        id="email"
        onChange={onChangeEvent}
        value={email}
      />
      {!error.emailError && <P>Please Enter Correct Email</P>}
      <Input
        placeholder="Please Enter Your Password"
        id="password"
        type="password"
        onChange={onChangeEvent}
        value={password}
      />
      {!error.passwordError && <P>Please Enter Strong Password</P>}
      <Button onClick={onSubmit} isLoggedIn={email && password}>Login</Button>
      {error.isLoggedIn && <P2>LoggedIn Successfull...!!!</P2>}
      <P2>
        Not registered <Link to="/signup">SignUp</Link><br/><br/>
        Watch bargraph design <Link to="/bargraph">Bar Graph</Link>
      </P2>
    </LoginMainDiv>
  );
}
// const mapStateToProps = (state) => {
//   return {
//       email: state.email,
//       password: state.password,
//       isLoggedIn: state.isLoggedIn
//   }
// }
export default Login;
// export default connect(mapStateToProps)(Login);

