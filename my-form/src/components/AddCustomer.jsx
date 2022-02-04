import axios from "axios";
import { useState} from "react";
import CustomerForm from "./CustomerForm";
import './form.scss'
const AddCustomer = () => {
    const [customerData, setCustomerData] = useState({
        customerName: '',
        gender: '',
        phoneNum: ''
    })
    const onSubmit = (customer) => {
        axios.post(`http://localhost:8000/customers/`,customer)
        .then(response => {
            if(response.status === 200){
                alert('Customer added successfully')
            }
            else Promise.reject()
        }).catch(error => alert("Error occured"))
    }
    return (
        <CustomerForm 
            initialValues={customerData}
            onSubmit={onSubmit}
            buttonText="Add Customer"
            enableReinitialize
        />  
    )
}
export default AddCustomer;