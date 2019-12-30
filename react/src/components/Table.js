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

// class Table extends React.Component{
//     constructor(props){
//         super();
//     }
//     render(){
//         return (
//         <div>  
//             <ReactTable  
//                 data={this.props.data}  
//                 columns={this.props.columns}
//                 defaultPageSize={5}
//                 getTdProps={(state, rowInfo, column, instance) => {
//                    return {
//                        onClick: (e, handelOriginal) => {
//                         // console.log('e', e);
//                         // console.log('handelOriginal', handelOriginal);
//                         // console.log('state', state);
//                         // console.log('rowInfo', rowInfo);
//                         // console.log('column', column);
//                         // console.log('instance', instance);
//                          console.log(this.props);
//                        }
//                    }
//                 }}
//             />  
//          </div> 

//     )};
// }

export default Table;