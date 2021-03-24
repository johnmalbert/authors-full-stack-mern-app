import React from 'react'
import axios from 'axios';
import { Button } from '@material-ui/core';

const DeleteButton = props => {
    const { authorId, successCallback } = props;

    const style = {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    }; 
    const deleteAuthor = e => {
        axios.delete('http://localhost:8000/api/authors/' + authorId)
            .then(res => {
                successCallback();
            })
    }
    
    return (
        <Button style={style} onClick={deleteAuthor}>
            Delete
        </Button>
    )
}

export default DeleteButton
