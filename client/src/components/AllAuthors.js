import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Button,  Card,  Container } from '@material-ui/core';
import { Link } from '@reach/router';
import DeleteButton from './DeleteButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const AllAuthors = props => {
    const [loaded, setLoaded] = useState(false);
    const [allAuthors, setAllAuthors] = useState([]);

    //axios to get the authors
    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
            .then(response => {
                console.log(response.data.results);
                setAllAuthors(response.data.results);
                setLoaded(true);
            })
            .catch(err => console.log("Errors, ", err))
    }, [])
    const style = {
        background: 'linear-gradient(45deg, yellow, 10%, green 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    }; 
    const removeFromDom = authorId => {
        setAllAuthors(allAuthors.filter(author => author._id !== authorId))
    }
    if(loaded === false){
        return(
            <p>Loading...</p>
        )
    }
    return (
        <div>
            <hr/>
            <Container maxWidth="sm">

            <Card>
            <h1>Favorite Authors</h1>
                <Table style={{margin: "auto"}}>
                    <TableBody>
            {
                allAuthors.map((author, i) => 
                        <TableRow key={i}>
                            <TableCell><Link to={`/authors/${author._id}`}><Button> {author.name}</Button></Link></TableCell>
                            <TableCell><Button style={style}><Link style={{color: 'white'}} to={`/authors/${author._id}/update`}> Edit </Link></Button></TableCell>
                            <TableCell><DeleteButton authorId={author._id} successCallback={()=>removeFromDom(author._id)}/></TableCell>
                        </TableRow>
                        
                )
            }
                </TableBody>
            </Table>
            </Card>
            </Container>
        </div>
    )
}

export default AllAuthors
