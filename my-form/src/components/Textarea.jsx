import {Field} from 'formik';
import './form.css';

const Textarea = ({label, name}) => {
    return(
        <div>
            <label htmlFor={name}>{label}</label>
            <Field as="textarea" name={name} className="textarea"/>
        </div>
    )
}
export default Textarea;