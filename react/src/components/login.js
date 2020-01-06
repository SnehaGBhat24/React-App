import React , { useState } from 'react';
import { isEmpty } from 'lodash';
import loginAction from '../actions/loginAction';
import { useDispatch } from 'react-redux'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { toast } from 'react-toastify';

const Login = () => {
  
let [loginCreds , setLoginCreds] = useState({ email : '', password : ''})

 const setLoginDetails = (e) => setLoginCreds({
       ...loginCreds,
       [e.target.type]: e.target.value,
})
const dispatch = useDispatch();

const validate = () => {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let result = re.test(String(loginCreds.email).toLowerCase());

  if(!result){
    return false;
  }
  if(isEmpty(loginCreds.email) || isEmpty(loginCreds.password)){
      return false;
  }
  if(loginCreds.password.length < 8 || loginCreds.password.length > 9){
   return false;
  }
  return true;
}

const showToast = (content,toastObj) => {
   toastObj.position = "top-center",
   toastObj.hideProgressBar = true,
   toastObj.autoClose = 1000,
   toast(content, toastObj); 
}

const login = () => {
  let toastObj = {};
  if(!validate()){
    toastObj.type = "error";
    showToast('Check Email and Passowrd', toastObj)
    return;
  }
  let params = {};
  params.email = loginCreds.email;
  params.password = loginCreds.password;
  dispatch(loginAction(params));
}

return (
  <div>
    <div>
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input className="formInput" type="email" 
                  value={ loginCreds.email }
                  onChange={ setLoginDetails }
                  placeholder="Enter Email" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input className="formInput" type="password" 
                  value={loginCreds.password }
                  onChange={ setLoginDetails }
                  placeholder="Enter Password" />
        </FormGroup>
        <br/>
        <Button onClick={ login }>Login</Button>
        <br/><br/>
        <p>Login to post your blog !!!</p>
      </Form>
    </div>
  </div>
)
}
export default Login;