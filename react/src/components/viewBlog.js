import React , { useState, useEffect } from 'react';
import { isEmpty } from 'lodash';
import blogReq from '../APIrequests/blog';
import { useSelector } from 'react-redux';
import { InputGroup, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";

const viewBlog = (props) => {
  let { params } = props.match;
  const user = useSelector(state => state.loggedUser);
  let items = [];
  let [ loadReply , setLoadReply ] = useState(1);
  const [ blogData, setBlogData ] = useState({});
  const [ blogReply , setBlogReply ] = useState(
    { content : '', likes : 0 , unlikes : 0 }
  );
  useEffect(() => {
     getBlogData();
  },[loadReply])

  const getBlogData = async() => {
      try {
        let {data} = await blogReq.getBlog(params.id);
        setBlogData(data)
      } catch(e){
          console.log(e);
      }
  }
  
  let updateLikesOrDislikes = async(val, type) => {
    let params = {};
    params.id = val._id
    params.blogId = val.blogId;
    params.type = type;
    try {
      await blogReq.update(params);
      setLoadReply(loadReply += 1);
    } catch(e){
      console.log(e);
    }
  }

  (() => {
    if(isEmpty(blogData) || isEmpty(blogData.repliesForBlog)) return ''
    else {
      items = blogData.repliesForBlog.map(dt =>
        <ul style={{ marginTop: '35px' }}>
          <li style={{ listStyleType: "none" }} key={ dt.email }>{dt.email}</li>
          <li style={{ marginTop: '4px',listStyleType: "none" }} key={ dt.replyContent._id }>{dt.replyContent}</li>
          <button className="feedbackbtn" onClick={() => updateLikesOrDislikes(dt,'likes') }>
            <FontAwesomeIcon icon={faThumbsUp} />
          </button>
          { dt.likes !== 0 ? dt.likes : ''}
          <button className="feedbackbtn" onClick={() => updateLikesOrDislikes(dt ,'unlikes') }>
            <FontAwesomeIcon style={{ marginLeft: '30px' }}icon={faThumbsDown} />
          </button>
          { dt.unlikes > 0 ? dt.unlikes : ''}
        </ul>
        )
    }
  })();

  const addReply = async() => {
    let params = {};
    params.blogId = blogData._id;
    params.email = user.email;
    params.replyObj = blogReply;
    try {
      let { data } = await blogReq.addReply(params);
      setLoadReply(loadReply += 1);
    } catch(e) {
       console.log(e);
    }
  }
  
  const getImage = () => {
     return `http://localhost:3002/uploads/${blogData.blogImage}`
  }

  return(
      <div>
          <div className="header">
            <h3>{ blogData.title }</h3>
            <p style= {{ fontSize:'22px' }}>{ blogData.content }</p>
            <div style={{position:'relative', marginTop: '40px'}}>
              <InputGroup style={{ width: '50%', float:'left'}}>
                  <textarea className="form-control" 
                  id="textArea" type="textarea"
                  value = { blogReply.content }
                  onChange = {(e) => setBlogReply({ content : e.target.value })}
                  rows={ 12 } placeholder="Write Reply"/>
              </InputGroup>
              { blogData.blogImage ? <img src={ getImage() } className="view-image"></img>: <div className="view-image"></div>}
            </div>
          </div>
          <br/>
          <Button style= {{ marginLeft:'25px'}} onClick={ addReply }>Reply</Button>
          {items}
      </div>
  )
}

export default viewBlog;