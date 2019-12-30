const initialState = {
    isLoggedIn: false,
    loggedUser: {},
}

const isLoggedReducer = (state = initialState, action) => {
   switch(action.type) {
       case 'Login' : 
           return Object.assign(state, action.payload);

        case 'Logout' : 
          return Object.assign(state, action.payload);

       default :
            return state;
   }
};

export default isLoggedReducer;