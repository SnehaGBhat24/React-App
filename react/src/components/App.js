import React from 'react';
import Header from './header';
import Home from './home';
import AddBlog from './addBlog';
import Settings from './settings';
import UserBlogs from './userBlogs';
import allBlogs from './allBlogs';
import viewBlog from './viewBlog';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
   return (
      <div id="root">
         <Router>
            <Header/>
            <Switch>
            <Route exact path="/" component={ Home }></Route>
            <Route exact path="/addBlog" component={ AddBlog }></Route>
            <Route exact path='/settings' component={ Settings }></Route>
            <Route exact path="/user/blogs" component={ UserBlogs }></Route>
            <Route exact path="/allBlogs" component={ allBlogs }></Route>
            <Route exact path="/viewBlog/:id" component={ viewBlog }></Route>
         </Switch>
         </Router>
      </div>
   );
}
// class App extends React.Component {
//    constructor(){
//       super();
//    }
//    render() {
//       return (
//          <div id="root">
//           <Router>
//              <Header/>
//              <Switch>
//               <Route exact path="/" component={ Home }></Route>
//               <Route exact path="/addBlog" component={ AddBlog }></Route>
//               <Route exact path='/settings' component={Settings}></Route>
//               <Route exact path="/user/blogs" component ={UserBlogs}></Route>
//             </Switch>
//           </Router>
//          </div>
//       );
//    }
// }

export default App;