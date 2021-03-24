import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Card, Container } from '@material-ui/core';



const Detail = props => {
    const [author, setAuthor] = useState({});
    const [loading, setLoading ] = useState(true);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${props.id}`)
            .then(response => {
                setAuthor(response.data.results);
                setLoading(false);
            })
            .catch(err => console.log(err));
    }, [])

    if(loading){
        return (
            <p>loading...</p>
        )
    }
    return (
        <div>
            <Container maxWidth="sm">
            <h5>Single Author Profile</h5>
                <Card>
                    <str>Author: {author.name}</str>
                </Card>
            </Container>
            
        </div>
    )
}

export default Detail
