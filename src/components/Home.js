import axios from "axios";
import { useEffect, useState } from "react";
import { Deleteurl, dataurl } from "../utils/apis";
import Table from 'react-bootstrap/Table'

import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
//  import { Link } from "react-router-dom";
const Home = () => {
    const [Data, setData] = useState([])
    const [Records, setRecords] = useState([])
    useEffect(() => {
        GetData();
    }, [])

    const GetData = async () => {
        try {
            const GetDataApi = await axios.get(dataurl);
            setData(GetDataApi.data);
            console.log(GetDataApi)
            setRecords(GetDataApi.data)
        }
        catch {
            console.error("api error")
        }
    };
    //delete function 
    const Deletedatahandler = async (id) => {
        await Deleteurl(id)
        GetData();
    }

    //filter function 
    const FilterHandle = (event) => {
        setRecords(Data.filter(f => f.job.toLowerCase().includes(event.target.value.toLowerCase())))
    }
    return (
        <>

            <center>
                <div className="d-flex top">
                    <button className="btn btn-primary"> <Link to="/add" className="link" > Add User</Link></button>
                    <input type="search" placeholder="search people based on jobs" onChange={FilterHandle} className="form-control" /></div>
            </center>
            <Table className="table" striped bordered hover>
                <thead > <tr><th>S.no</th><th>Name</th><th> Email </th> <th> Designation</th> <th>Modify</th> </tr> </thead>
                <tbody>
                    {
                        Records.map((data) => (<tr key={data.id}>
                            <td>{data.id}</td>
                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            <td>{data.job}</td>
                            <td>
                                <Button><Link className="link" to={"/edit/" + data.id}> Edit</Link> </Button>
                                <Button><Link className="link" to={"/read/" + data.id}> Read</Link></Button>
                                <Button className="btn btn-danger" onClick={() => {
                                    Deletedatahandler(data.id)
                                }} >   <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>  </Button> </td>
                        </tr>))
                    }
                </tbody>
            </Table>

        </>
    )

}

export default Home;