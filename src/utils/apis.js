export const dataurl = "http://localhost:3000/users/"  ;
import axios from "axios";

//url for delete
export const Deleteurl =  async (id) => {
    await axios.delete(`${dataurl}/${id}`)
}


