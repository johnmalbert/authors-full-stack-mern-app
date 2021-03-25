import { navigate } from '@reach/router';
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import FormPage from './FormPage';

const Update = props => {
    const { id } = props;
    const [author, setAuthor ] = useState();
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]); 


    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + id)
            .then(res => {
                console.log(res.data);
                setAuthor(res.data.results)
                setLoaded(true);
            })
    }, [])

    const updateAuthor = author => {
        axios.put('http://localhost:8000/api/authors/' + id, author)
            .then(res => {
                console.log(res);
                if(res.data.message === "error"){
                    const errorResponse = res.data.errors;
                    const errorArr = [];
                    for (const key of Object.keys(errorResponse)){
                        errorArr.push(errorResponse[key].message);
                    }
                    setErrors(errorArr);
                }else{
                    { navigate('/authors') }
                }
            })
    }
    return (
        <div>
            <h1>Update Author</h1>
            {errors.map((err, index) => <p style={{color: 'red'}} key={index}>{err}</p>)}
            {loaded && (
            <FormPage
                onSubmitProp={updateAuthor}
                initialName={author.name}
            />
            )}
        </div>
    )
}

export default Update
