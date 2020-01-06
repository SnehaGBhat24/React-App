import React ,{ useState } from 'react';
import { isEmpty } from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import userReq from '../APIrequests/user';
import { toast } from 'react-toastify';
import logoutAction from '../actions/logoutAction';


const Settings = () => {
    const dispatch = useDispatch();
    let history = useHistory();
    const user = useSelector(state => state.loggedUser);

    let [newPassword , setNewPassword] = useState({ password : '', confirmPassword : ''})
    
    const validate = () => {
       if(isEmpty(newPassword.password) || isEmpty(newPassword.confirmPassword)){
           return false;
       }
       if(newPassword.password !== newPassword.confirmPassword){
           return false;
       }
       if(newPassword.password.length < 8 || newPassword.password.length > 9){
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

    const update = async () => {
      const toastObj = {};
      let params = {};
      params.email = user.email;
      params.newPassword = newPassword.password;

      if(!validate()){
        toastObj.type = "error";
        showToast('Check Password Fileds', toastObj);
        return;
      }
      try {
        let { data } = await userReq.updateAccount(params)
        toastObj.type = "success";
        showToast('Updated Successfully', toastObj);
        dispatch(logoutAction('Logout'));
        history.push('/');
      } catch(e){
          console.log(e)
          toastObj.type = "error";
          showToast('Something went wrong', toastObj);
      }
    }
    const setPassword = (e) => setNewPassword({
        ...newPassword,
        [e.target.id]: e.target.value,
    })

    return(
       <div className="settings">
            <Form>
                <FormGroup>
                    <Label>Enter New password</Label>
                    <Input
                    id="password"
                    value = {newPassword.password}
                    onChange = { setPassword }
                    className="formInput" 
                    type="password" placeholder="Enter New Password" />
                </FormGroup>
                <FormGroup>
                    <Label>Re-Enter Password</Label>
                    <Input className="formInput"
                    id="confirmPassword"
                    onChange = { setPassword } 
                    value = {newPassword.confirmPassword}
                    type="password" 
                    placeholder="Re Enter Password" />
                </FormGroup>
                <br/>
                <Button onClick={ update }>Update Password</Button>
            </Form>
       </div>
  )
}

export default Settings;