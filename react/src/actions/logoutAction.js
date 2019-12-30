
const logoutAction = () => {
    return {
    type : 'Logout',
    payload : {
        isLoggedIn : false,
        loggedUser : {},
    }
    }
}

export default logoutAction;