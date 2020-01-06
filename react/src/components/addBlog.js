import React , { useState , useEffect } from 'react';
import _ from 'lodash';
import { useSelector } from 'react-redux'
import { Form ,InputGroup, Input, Button } from 'reactstrap';
import { toast } from 'react-toastify';
import blogReq from '../APIrequests/blog';


const AddBlog = (props) => {
    const user = useSelector(state => state.loggedUser);
    let [blogDetails , setBlogDetails] = useState({
        title : '', textArea : '' , file : {},
    })

    const showToast = (content,toastObj) => {
        toastObj.position = "top-center",
        toastObj.hideProgressBar = true,
        toastObj.autoClose = 1000,
        toast(content, toastObj); 
    }

    const validateFields = () => {
      if(_.isEmpty(blogDetails.title || _.isEmpty(blogDetails.textArea))) return false
      else return true;
    }

    const addBlogs = async() => {
        let toastObj = {};
        let params = {};
        if(!validateFields()) {
            toastObj.type = "error";
            showToast('Title or Content cannot be empty', toastObj);
            return;
        }
        params = Object.assign(params, blogDetails);
        params.id = 'new';
        params.email = user.email;
        params.userId = user._id;
        params.content = blogDetails.textArea;
        var formData = new FormData();
        for(let key in params){
            formData.append(key, params[key])
        }
        try {
           let { data } = await blogReq.add(formData);
           toastObj.type = "success";
           showToast('Posted Successfully', toastObj);
           setBlogDetails({textArea:'', file: {}, title: ''});
        } catch(e) {
            console.log(e);
            toastObj.type = "error";
            showToast(e, toastObj);
        }
    }
    const setBlogData = (e) => {
     let value;
      if(e.target.id === 'file'){
        value = e.target.files[0];
      } else value = e.target.value;
      setBlogDetails({
        ...blogDetails,
        [e.target.id] : value,
      })
    }

    return(
    <div className="addBlog">
        <Form  encType ="multipart/form-data">
            <InputGroup style={{marginTop: '40px'}} size="lg">
                <Input id="title"
                value={ blogDetails.title }
                onChange={ setBlogData }
                placeholder="Title for Blog" />
            </InputGroup> 

            <InputGroup style={{marginTop: '40px'}}>
                <Input type="file"
                id="file"
                name= "blogImage"
                // value={ blogDetails.file.name }
                onChange={ setBlogData }
                placeholder="Title for Blog" />
            </InputGroup> 

            <InputGroup style={{marginTop: '40px',}}>
                <textarea className="form-control" 
                value={ blogDetails.textArea }
                onChange={ setBlogData }
                id="textArea" type="textarea"
                rows={10} placeholder="Write Blog"/>
            </InputGroup> 
            <br/><br/>
            <Button onClick={ addBlogs }>Post Blog</Button>
        </Form> 
        </div> 
   )
}

export default AddBlog;