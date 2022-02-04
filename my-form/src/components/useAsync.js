import { useEffect, useState } from 'react';
import axios from 'axios';
const useAsync = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const {data: response} = await axios.get('http://localhost:8000/customers');
                setData(response);
                setLoading(false);
                setError('');
            } catch(error) {
                setError('Not Found');
                setData({});
            }
        }
        fetchData();
    },[]);
    return {
        data,
        loading,
        error
    }
}
export default useAsync;