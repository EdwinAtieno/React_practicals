// Custom hook to fetch data from an API and manage the state of the data and must start with use
import {useEffect, useState} from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const abortCont = new AbortController();

        setTimeout(() => {
        fetch(url, {signal: abortCont.signal})
            .then(res => {
                if(!res.ok){
                throw Error('could not fetch the data for the resource')
                }
            return res.json();
        }).then(data => {
            setError(null)
            setIsPending(false)
            setData(data)
        }).catch(err =>{
            if (err.name === 'AbortError'){
                console.log('fetch aborted')
            } else {
                setIsPending(false)
                setError(err.message)
            }
        })
        }, 1000);

        return () => abortCont.abort();
    }, [url])

    return {data, isPending, error}
}

export default useFetch;