import axios from "axios";
import { useEffect, useState } from "react";
import { dataurl } from "../utils/apis";
import { useNavigate, useParams } from "react-router-dom";
import { Form, Link, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
const Edit = () => {

    const {id} = useParams()

     const [Editput , SetEditput] = useState({
        name : "" ,
        job : "" ,
        email : ""
    }) ;

       const {name , job ,email} = Editput ;

    const onchange = (e) => {
           SetEditput({ ...Editput ,[e.target.name] : e.target.value })
         
    }   ;

      useEffect( ()=>{
           axios.get(dataurl+id).then(
            res => {  SetEditput(res.data)}
        )
      },[])
       
   // useNavigate in react router dom
   const navigate = useNavigate()
   const submitHandler = (e) => {
       e.preventDefault();
       axios.put(dataurl + id  ,  Editput).then(
        res => { console.log(res.data) ; alert("Updated Succesfully") ; navigate("/") }
       )  

    
   }
    return (
    <div>  Edit
        <form  onSubmit={submitHandler}>
    <input type="text" name="name" value={name} onChange={onchange} ></input>
    <input type="text" name="job"  value={job}   onChange={onchange}></input>
    <input type="email" name="email" value={email}  onChange={onchange} ></input>
    <button type="submit">Submit</button>
    </form>

    </div>)
}

export default Edit;