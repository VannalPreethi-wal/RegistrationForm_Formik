import {Field, ErrorMessage} from 'formik';
import Error from './Error';
import './form.css';

const Input = ({label, name, placeholder}) => {
    return(
        <div>
            <label htmlFor = {name} className="required">{label}</label>
            <Field id={name} name={name} className="field" placeholder={placeholder}/>
            <ErrorMessage name={name} component={Error}/> 
        </div>
    )
}
export default Input;