import React from 'react';
import { useSelector } from 'react-redux';
import Login from './login'

const Home = () => {
  const isLogged = useSelector(state => state.isLoggedIn);

  return(
        <div>
            <div className="loginForm">
            {!isLogged ? <Login></Login> : ''}
            </div>
            <div className= "blogImage">
              { !isLogged ? 
              <img src={require('../images/blogging.jpg')} alt="" width='880px' height='auto'/> :
              <img src={require('../images/img.jpg')} alt="" width='100%' height='500px' /> }
            </div>
      </div> 
  )
}

export default Home;