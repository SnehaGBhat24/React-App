import loginReq from '../APIrequests/user';
import { toast } from 'react-toastify';


const showToast = (content,toastObj) => {
    toastObj.position = "top-center",
    toastObj.hideProgressBar = true,
    toastObj.autoClose = 1000,
    toast(content, toastObj); 
}

const loginAction = (params) => {
    let toastObj = {};
    return async dispatch => {
        try {
            let { data } = await loginReq.login(params);
            dispatch({
            type : 'Login',
            payload : {
                isLoggedIn : true,
                loggedUser : data.user,
            }
            });
            toastObj.type = "success"
            showToast('LoggedIn Successfully' ,toastObj);
        } catch(error){
            toastObj.type = "error"
            showToast(error.data ,toastObj)
        }
    }
}

export default loginAction;