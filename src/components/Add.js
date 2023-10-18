import { useState } from "react";
import { Form, Link, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import { dataurl } from "../utils/apis";
const Add = () => {
    const [AddUser, SetAddUser] = useState({
        name: "",
        email: "",
        job: "",
    });
    // destructuring 
    const { name, job, email } = AddUser
    const Onchange = (event) => {
        SetAddUser({ ...AddUser, [event.target.name]: event.target.value })
    };
     navigate = useNavigate()
    const submitevent = (event) => {
        event.preventDefault();
        SetAddUser({
            name: "",
            email: "",
            job: "",
        })
           console.log(AddUser);
           axios.post(dataurl , AddUser).then( navigate("/")).catch(console.error("error")) ;
           alert("User Added Succesfully")
    }
    return (
        <>   <center>
            
            <Form onSubmit={submitevent}>
                <Form.Group className="form-group">
                    <div className="form-border">
                    <h1>Add Users </h1>
                        <Form.Control type="text" placeholder="Enter Name" name="name" value={name} onChange={Onchange} /> <br />
                        <Form.Control type="email" placeholder="Enter email" name="email" value={email} onChange={Onchange} /><br />
                        <Form.Control type="text" placeholder="Enter Enter their Job" name="job" value={job} onChange={Onchange} /><br />
                    </div>
                </Form.Group>
                <Button type="submit">  Click Here To Submit  </Button>
                <Button> <Link to="/" className="link"> Back </Link>   </Button>
            </Form>
        </center>
        </>

    )
}

export default Add;