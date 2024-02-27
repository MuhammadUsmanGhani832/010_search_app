import React, { useEffect, useState } from 'react';
import yelp from '../api/yelp';

const useSearch = () => {

    const [results, setResult] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);


    const fetchAPI = async (searchIn) => {
        setLoading(true);
        try {
            const res = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchIn,
                    location: 'san jose'
                }
            });
            if (res.error) {
                throw new Error(res.error)
            }
            setResult(res.data.businesses);

        } catch (error) {
            setErrorMessage(error.message);
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchAPI('pasta')
    }, [])
    return { fetchAPI, errorMessage, results, loading }
}

export default useSearch;