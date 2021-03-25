import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Card, Container, Button } from '@material-ui/core';
import FormPage from './FormPage';
import DeleteButton from './DeleteButton';

const Detail = props => {
    const { id } = props;
    const [author, setAuthor] = useState({});
    const [loading, setLoading ] = useState(true);
    const [errors, setErrors] = useState()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${props.id}`)
            .then(response => {
                setAuthor(response.data.results);
                console.log(response.data.results);
                setLoading(false);
            })
            .catch(err => console.log(err));
    }, [])

    const upVote = () => {
        console.log("Upvote!");
    }
    const downVote = () => {
        console.log("DownVote!");
    }

    const createQuote = author => {
        console.log("Form submitted!");
        console.log(author);
        const quote = {
            quote: author.name
        }
        console.log(quote);
        axios.post(`http://localhost:8000/api/authors/${id}/quote`, quote)
            .then(response => {
                console.log(response.data);
                if(response.data.message === "error"){
                    setErrors(response.data);
                }else{
                    setErrors("");
                    alert("New quote created successfully!");
                    setAuthor(response.data.results);
                }
            })
    }

    if(loading){
        return (
            <p>loading...</p>
        )
    }
    return (
        <div>
            <hr/>
            <Container maxWidth="sm">
            <h5>Profile</h5>
                <Card>
                    <h5>Author: {author.name}</h5>
                    {
                        // map the author's reviews
                        author.quotes.map((quote, i) => 
                            <p style={{textAlign: 'left'}} key={i}>
                                <Button style={{textAlign: 'right', color: 'green'}} onClick={upVote}>UP</Button >
                                <Button style={{textAlign: 'right', color: 'red'}}  onClick={downVote}>DOWN</Button>
                            {i+1}. {quote.quote} | {quote.votes}</p>
                        )
                    }
                    <FormPage label="Add a quote" onSubmitProp = {createQuote} initialValue = ""/>
                    { errors ? <p style={{color: 'red'}}>Quote must be at least ten characters</p> : ""}
                </Card>
            </Container>
            
        </div>
    )
}

export default Detail
