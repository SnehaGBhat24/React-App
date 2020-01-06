import React from 'react';
import ReactTable from "react-table"; 
import "react-table/react-table.css";
import { useHistory } from "react-router-dom";

const Table = (props) => {
    let history = useHistory();
    return (
        <div>  
            <ReactTable  
                data={ props.data }  
                columns={ props.columns }
                defaultPageSize={5}
                getTdProps={(state, rowInfo,) => {
                    return {
                        onClick: (e, handelOriginal) => {
                          history.push(`/viewBlog/${rowInfo.original._id}`);
                        }
                    }
                }}
            />  
        </div> 

    )
}

export default Table;