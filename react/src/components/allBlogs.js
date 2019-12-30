import React, { useState, useEffect , useLayoutEffect} from  'react';
import { map } from 'lodash';
import Table from './Table';
import blogReq from '../APIrequests/blog';

const allBlogs = () => {
    let [ tableData , setTableData ] = useState([]);
    let [ tableColumns , setTableColumns ] = useState([{Header: 'Blog Title', accessor: 'title'}]);

    useEffect(() => {
         getAllBlogs();
    },[])
    const getAllBlogs = async() => {
        try {
            let { data } = await blogReq.getAllBlogs();
            let filteredData = map(data, dt => ({ title : dt.title , email: dt.email ,_id:dt._id}));
            setTableData(filteredData)
        } catch(e) {
            console.log(e);
        }
    }
    return(
            <Table data={ tableData } columns={ tableColumns } ></Table>
        )
}

export default allBlogs;