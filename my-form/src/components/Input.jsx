import {Field, ErrorMessage} from 'formik';
import {FormGroup} from 'reactstrap';
import Error from './Error';


const Input = ({label, name, placeholder}) => {
    return(
        <FormGroup>
            <label htmlFor = {name} className="required">{label}</label>
            <Field id={name} name={name} placeholder={placeholder}/>
            <ErrorMessage name={name} component={Error}/> 
        </FormGroup>
    )
}
export default Input;