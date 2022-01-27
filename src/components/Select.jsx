import {Field, ErrorMessage} from 'formik';
import Error from './Error';
import './form.css';

const Select = ({label, name}) => {
    return(
        <div>
            <label className="required">{label}</label>
            <Field name={name} id={name} as="select">
                <option value="select">Select</option>
                <option value="HTML">HTML</option>
                <option value="Javascript">Javascript</option>
                <option value="React">React</option>
                <option value="Angular">Angular</option>
            </Field>
            <ErrorMessage name={name} component={Error}/>
        </div>
    )
}
export default Select;