import {Field, ErrorMessage } from 'formik';
import Error from './Error';
import './form.css';

const DatePicker = ({label, name}) => {
    return(
        <div>
            <label htmlFor={name} className="required">{label}</label>
            <Field type = "date" name={name}/>
            <ErrorMessage name={name} component={Error}/>
        </div>
    )
}
export default DatePicker;