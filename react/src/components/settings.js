import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Settings = () => {
    return(
       <div className="settings">
            <Form>
                <FormGroup>
                    <Label>Enter New password</Label>
                    <Input className="formInput" type="password" placeholder="Enter New Password" />
                </FormGroup>
                <FormGroup>
                    <Label>Re-Enter Password</Label>
                    <Input className="formInput" type="password" placeholder="Re Enter Password" />
                </FormGroup>
                <br/>
                <Button>Update Password</Button>
            </Form>
       </div>
  )
}
// class Settings extends React.Component{
//     render(){
//       return(
//           <div className="settings">
//                <Form>
//                     <FormGroup>
//                         <Label>Enter New password</Label>
//                         <Input className="formInput" type="password" placeholder="Enter New Password" />
//                     </FormGroup>
//                     <FormGroup>
//                         <Label>Re-Enter Password</Label>
//                         <Input className="formInput" type="password" placeholder="Re Enter Password" />
//                     </FormGroup>
//                     <br/>
//                     <Button>Update Password</Button>
//                </Form>
//         </div>
//         )};
// }

export default Settings;