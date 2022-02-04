import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import Input from './Input';
import Radio from './Radio';
import {Button} from 'reactstrap';
import './form.scss';


const CustomerForm = ({initialValues, onSubmit, buttonText}) => {
    const validationSchema = Yup.object({
        customerName: Yup.string().required('Full name Required'),
        gender: Yup.string().required('required'),
        phoneNum: 
            Yup.string()
            .required('required')
            .matches(/^[0-9]+$/, "Must be only digits")
            .min(10, 'Must be 10 digits')
            .max(10, 'Must be 10 digits')
    })
    return (
        <div className="forms">
            <Formik 
                initialValues={initialValues} 
                validationSchema={validationSchema}
                onSubmit={onSubmit}
                enableReinitialize
            >
                <Form>
                    <Input name='customerName' label='Name of the Customer'/>
                    <Radio name='gender' label="Gender" />
                    <Input name="phoneNum" label="Mobile Number"/>
                    <div className="button">
                        <Button type="submit" className="Button">{buttonText}</Button>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}
                
    
export default CustomerForm;