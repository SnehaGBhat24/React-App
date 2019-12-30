import React from 'react';
import Login from './login'

const Home = () => {
  return(
        <div>
            <div className="loginForm">
            <Login></Login>
            </div>
            <div className="blogImage">
              <img src={require('../images/blogging.jpg')} alt="" width='880px' height='auto'/>
            </div>
      </div> 
  )
}
// class Home extends React.Component{
//     render(){
//       return(
//           <div>
//               <div className="loginForm">
//               <Login></Login>
//               </div>
//               <div className="blogImage">
//                 <img src= {require('../images/blogging.jpg')} width='880px' height='auto'/>
//               </div>
//         </div> 
//         )};
// }

export default Home;