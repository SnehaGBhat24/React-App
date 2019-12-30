import React , { useState, useEffect } from 'react';
import blogReq from '../APIrequests/blog';

const viewBlog = (props) => {
  console.log('props', props);
  let { params } = props.match;
  const [ blogData, setBlogData ] = useState({});

  useEffect(() => {
     getBlogData();
  },[])

  const getBlogData = async() => {
      console.log('getBlog')
      try {
        let {data} = await blogReq.getBlog(params.id);
        console.log('data', data);
        setBlogData(data)
      } catch(e){
          console.log(e);
      }
  } 
  console.log('blogData', blogData)
  return(
      <div>
          <div className="header">
          <h2>{blogData.title}</h2>
          </div>
      </div>
  )
}

export default viewBlog;