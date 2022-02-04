import axios from "axios";
import {Link} from "react-router-dom";
import {Button} from 'reactstrap';

const CustomerRow = (props) => {
    const {id, customerName, gender, phoneNum} = props.obj;

    const deleteCustomer = () => {
        axios.delete('http://localhost:8000/customers/'+id)
        .then((response) => {
            if(response.status === 200){
                alert("deleted student successfully");
                window.location.reload();
            } else Promise.reject();
        }).catch(error => alert("Error occured"))
    }

    return(
        <tr>
            <td>{customerName}</td>
            <td>{gender}</td>
            <td>{phoneNum}</td>
            <td>
                <Link to={"/EditCustomer/"+ id} className="edit-option">Edit</Link>
                <Button onClick={deleteCustomer} size="sm" variant="danger" >Delete</Button>
            </td>
        </tr>
    )
}
export default CustomerRow;