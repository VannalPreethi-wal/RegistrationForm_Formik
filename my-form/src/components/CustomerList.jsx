import useAsync from "./useAsync";
import {Table} from 'reactstrap';
import CustomerRow from "./CustomerRow";
import './form.scss';
const CustomerList = () => {
    const {data, loading, error} = useAsync();
    const customerTable = () => {
        return data.map((res, i) => {
            return <CustomerRow obj={res} key={i}/>
        });
    }
    return (
        <Table bordered striped hover>
            <thead>
                <tr>
                    <th>Name of the customer</th>
                    <th>Gender</th>
                    <th>Mobile Number</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>{customerTable()}</tbody>
        </Table>
    )
}
export default CustomerList;