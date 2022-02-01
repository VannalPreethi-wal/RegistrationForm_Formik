import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import Input from './Input';
import Radio from './Radio';

const CustomerForm = () => {
    return (
        <Formik
            initialValues = {{
                customerName: ' ',
                gender: '',
                phoneNum: '',
            }}
            validationSchema = {Yup.object({
                customerName: Yup.string().required('Full name Required'),
                gender: Yup.string().required('required'),
                phoneNum: 
                    Yup.string()
                    .required('required')
                    .matches(/^[0-9]+$/, "Must be only digits")
                    .min(10, 'Must be 10 digits')
                    .max(10, 'Must be 10 digits')
            })}
            onSubmit={(values) => console.log(values)}
        >
            <Form>
                <Input name='customerName' label='Name of the Customer'/>
                <Radio name='gender' label="Gender"/>
                <Input name="phoneNum" label="Mobile Number"/>
                <button type="submit">Submit</button>
            </Form>
        </Formik>
    )
}
export default CustomerForm;