import { Formik, Form } from 'formik';
import Input from './Input';
import Radio from './Radio';
import Select from './Select';
import DatePicker from './DatePicker';
import Textarea from './Textarea';
import * as Yup from 'yup';
import './form.css';

const SimpleForm = () => {
    return (
        <>
            <h2 className="heading">Registration Form</h2>
            <Formik
                initialValues = {{
                    fullName: '',
                    gender: '',
                    email: '',
                    courses: '',
                    birthDate: '',
                    address: ''
                }}
                validationSchema = {Yup.object({
                    fullName: Yup.string().required('fullName Required'),
                    gender: Yup.string().required('Required'),
                    email: Yup.string().email('Invalid email format').required('email required'),
                    courses: Yup.string().required('Required'),
                    birthDate: Yup.date().required('Required').nullable()
                })}
                onSubmit = {(values) => console.log("GivenData",values)}
            >
                <div className="forms">
                    <Form className="form">
                        <Input label='FullName' name='fullName' placeholder="Enter your Full name"/>
                        <Radio label="Gender" name="gender"/>
                        <Input label="Email" name="email" placeholder="Enter your email"/>
                        <Select label="Courses" name="courses"/>
                        <DatePicker label="Date of Birth" name="birthDate"/>
                        <Textarea label="Current Location" name="address"/>
                        <div className="button">
                            <button type = "submit">Submit</button>
                        </div>
                    </Form>
                </div>
            </Formik>
        </>
    );
}
export default SimpleForm;