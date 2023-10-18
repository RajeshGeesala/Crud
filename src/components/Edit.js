import axios from "axios";
import { useEffect, useState } from "react";
import { dataurl } from "../utils/apis";
import { useNavigate, useParams } from "react-router-dom";
import { Form, Link, useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
const Edit = () => {

    const { id } = useParams()

    const [Editput, SetEditput] = useState({
        name: "",
        job: "",
        email: ""
    });

    const { name, job, email } = Editput;

    const onchange = (e) => {
        SetEditput({ ...Editput, [e.target.name]: e.target.value })

    };

    useEffect(() => {
        axios.get(dataurl + id).then(
            res => { SetEditput(res.data) }
        )
    }, [])

    // useNavigate in react router dom
    const navigate = useNavigate()
    const submitHandler = (e) => {
        e.preventDefault();
        axios.put(dataurl + id, Editput).then(
            res => { console.log(res.data); alert("Updated Succesfully"); navigate("/") }
        )


    }
    return (
        <div>  <center>
            <Form onSubmit={submitHandler}>
                <Form.Group className="form-group">
                    <Form.Control type="text" name="name" placeholder="Update name" value={name} onChange={onchange} /><br></br>
                    <Form.Control type="text" name="job" placeholder="update job" value={job} onChange={onchange} /><br></br>
                    <Form.Control type="email" name="email" placeholder="update email" value={email} onChange={onchange} /><br></br>
                    <Button type="submit">Update</Button>     <Button> <Link to="/" className="link"> Back </Link>   </Button>
                </Form.Group>
            </Form>
        </center>
        </div>)
}

export default Edit;