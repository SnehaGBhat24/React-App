import React , { useState , useEffect } from 'react';
import { useSelector } from 'react-redux'
import { InputGroup, Input, Button } from 'reactstrap';
import blogReq from '../APIrequests/blog';
import autosize from "autosize";

const AddBlog = (props) => {
    const user = useSelector(state => state.loggedUser);
    let [blogDetails , setBlogDetails] = useState({
        title : '', textArea : '' , file : '',
    })
    useEffect(() => {
        let textArea = document.getElementById('textArea').focus()
        autosize(textArea);
    }, [ blogDetails.textArea ])

    const addBlogs = async() => {
        let params = {};
        params = Object.assign(params, blogDetails);
        params.id = 'new';
        params.email = user.email;
        params.userId = user._id;
        params.content = blogDetails.textArea;
        try {
           let { data } = await blogReq.add(params);
        } catch(e) {
            console.log(e);
        }
    }
    const setBlogData = (e) => setBlogDetails({
        ...blogDetails,
        [e.target.id] : e.target.value,
    })

    return(
        <div className="addBlog">
            <InputGroup style={{marginTop: '40px'}} size="lg">
                <Input id="title"
                value={ blogDetails.title }
                onChange={ setBlogData }
                placeholder="Title for Blog" />
            </InputGroup> 

            <InputGroup style={{marginTop: '40px'}}>
                <Input type="file"
                value={ blogDetails.file }
                onChange={ setBlogData }
                placeholder="Title for Blog" />
            </InputGroup> 

            <InputGroup style={{marginTop: '40px'}}>
                <textarea className="form-control" 
                value={ blogDetails.textArea }
                onChange={ setBlogData }
                id="textArea" type="textarea"
                rows={10} placeholder="Write Blog"/>
            </InputGroup> 
            <br/><br/>
            <Button onClick={ addBlogs }>Post Blog</Button> 
        </div> 
   )
}

// class AddBlog extends React.Component{
//     componentDidMount() {
//         this.textarea.focus();
//         autosize(this.textarea);
//     }
//     render(){
//       return(
//           <div className="addBlog">
//             <InputGroup style={{marginTop: '40px'}} size="lg">
//                 <Input placeholder="Title for Blog" />
//             </InputGroup> 

//             <InputGroup style={{marginTop: '40px'}}>
//                 <Input type="file"  placeholder="Title for Blog" />
//             </InputGroup> 

//             <InputGroup style={{marginTop: '40px'}}>
//                 <textarea className="form-control" type="textarea" ref={c => (this.textarea = c)}
//                 rows={10} placeholder="Write Blog"/>
//             </InputGroup> 
//             <br/><br/>
//             <Button>Post Blog</Button> 
//         </div> 
//         )};
// }

export default AddBlog;