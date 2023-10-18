import axios from "axios";
import { useEffect, useState } from "react";
import { dataurl } from "../utils/apis";
import { useParams } from "react-router-dom";
import { Card, CardBody, CardTitle } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

const Read = () => {

    const [ReadData, SetReadData] = useState([]);
    const { id } = useParams();
    useEffect(() => { GetReadData() }, []);
    const GetReadData = async () => {
        try {
            const Data = await axios.get(dataurl + id);
            SetReadData(Data.data)

        } catch {

        }
    }
    return (<div>
        <center>
            <Card>
                <CardBody>
                    <h3>Name :{ReadData.name}  </h3>
                    <h4> Email : {ReadData.email}   </h4>
                    <h4> Job : {ReadData.job} </h4>
                </CardBody>
            </Card>
            <Button > <Link className="link" to={"/edit/" + id}> Edit</Link> </Button>
            <Button> <Link to="/" className="link"> Back </Link>   </Button>
        </center>
    </div>)
};


export default Read;