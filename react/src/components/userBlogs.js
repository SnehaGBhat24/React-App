import React,{ useEffect , useState }from  'react';
import { map } from 'lodash';
import Table from './Table';
import { useSelector } from 'react-redux';
import blogReq from '../APIrequests/blog'

const UserBlogs = () => {
    const user = useSelector(state => state.loggedUser);
    let [ UserBlogs, setUsersBlogs ] = useState([]);
    let [ tableColumns , setTableColumns ] = useState([{Header: 'Blog Title', accessor: 'title'}]);

    useEffect(() => {
       getUsersBlog();
    }, [])

    const getUsersBlog = async() => {
      let params = {};
      params.email = user.email;
      params.userId = user._id;
      let { data } = await blogReq.blogsForUser(params);
      let filteredData = map(data, dt => ({ title : dt.title , email: dt.email ,_id:dt._id}));
      setUsersBlogs(filteredData);
    }
    return(
            <Table data={ UserBlogs } columns={ tableColumns }></Table>
        )
}
// class UserBlogs extends React.Component{
//     constructor(){
//         super();
//         this.data = [{name:'Sneha'}]
//         this.columns = [{Header: 'Name', accessor: 'name'}]
//     }
//     render(){
//         return(
//          <Table data={this.data} columns={this.columns}></Table>
//     )}
// }

export default UserBlogs;