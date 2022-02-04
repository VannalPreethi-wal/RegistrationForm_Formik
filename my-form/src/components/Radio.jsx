import {Field, ErrorMessage} from 'formik';
import { FormGroup } from 'reactstrap';
import Error from './Error';


const Radio = ({label,name}) => {
    return (  
        <FormGroup>
            <label className="required">{label}</label>
            <label>
                <Field type="radio" name={name} value="Male"/>
                Male
            </label>
            <label>
                <Field type="radio" name={name} value="Female"/>
                Female
            </label>
            <ErrorMessage name={name} component={Error}/>
        </FormGroup>
    )
}
export default Radio;