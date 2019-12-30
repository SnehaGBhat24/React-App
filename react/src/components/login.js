import React , { useState } from 'react';
import loginAction from '../actions/loginAction';
import { useDispatch } from 'react-redux'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Login = () => {
   let [loginCreds , setLoginCreds] = useState({ email : '', password : ''})

 const setLoginDetails = (e) => setLoginCreds({
       ...loginCreds,
       [e.target.type]: e.target.value,
})
const dispatch = useDispatch();

const login = () => {
  let params = {};
  params.email = loginCreds.email;
  params.password = loginCreds.password;
  dispatch(loginAction(params))
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