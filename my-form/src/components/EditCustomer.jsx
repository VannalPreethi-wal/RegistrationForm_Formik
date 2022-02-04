import axios from 'axios';
import {useEffect, useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CustomerForm from './CustomerForm';
const EditCustomer = ({id1}) => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [presentCustomer, setPresentCustomer] = useState({
        customerName:'',
        gender:'',
        phoneNum:''
    });
    const onSubmit = (customer) => {
        axios.put(
            'http://localhost:8000/customers/'+id,
            customer
        ).then(response => {
            if(response.status === 200){
                alert("customer updated successfully");
                navigate.push("/CustomerList");
            } else Promise.reject();
        }).catch(error => alert("Error occured"))
    }
    useEffect(() => {
        axios.get(
            `http://localhost:8000/customers/${id}`
        ).then(response => {
            const {customerName, gender, phoneNum} = response.data;
            setPresentCustomer({customerName, gender, phoneNum})
        }).catch((error) => console.log(error));
    }, []);
    return (
        <CustomerForm
            initialValues={presentCustomer}
            onSubmit = {onSubmit}
            buttonText="update"
        />
    );
}
export default EditCustomer;