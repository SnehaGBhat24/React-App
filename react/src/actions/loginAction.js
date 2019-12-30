import loginReq from '../APIrequests/login';

const loginAction = (params) => {
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
        } catch(e){
            console.log(e);
        }
    }
}

export default loginAction;