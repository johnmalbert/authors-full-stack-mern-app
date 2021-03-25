import React, { useState } from 'react';
import axios from 'axios';
import FormPage from './FormPage';


const Main = () => {

    const [authors, setAuthors] = useState([]);
    const [errors, setErrors] = useState([]); 
    const createAuthor = author => {
        axios.post('http://localhost:8000/api/authors', author)
            .then(res=>{
                setAuthors([...authors, res.data]);
                console.log(res.data.message);
                if(res.data.message === "error"){
                    const errorResponse = res.data.errors;
                    const errorArr = [];
                    for (const key of Object.keys(errorResponse)){
                        errorArr.push(errorResponse[key].message);
                    }
                    setErrors(errorArr);
                }
            })
    }
    
    return (
        <div>
            {/* The main will call the form */}
            <hr/>
            {errors.map((err, index) => <p style={{color: 'red'}} key={index}>{err}</p>)}
            <FormPage label="Author Name" onSubmitProp={createAuthor} initialName="" />
        </div>
    )
}

export default Main
