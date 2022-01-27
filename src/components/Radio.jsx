import {Field, ErrorMessage} from 'formik';
import Error from './Error';
import './form.css';

const Radio = ({label,name}) => {
    return (  
        <div>
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
        </div>
    )
}
export default Radio;