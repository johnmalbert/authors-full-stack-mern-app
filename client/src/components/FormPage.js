import React, {useState} from 'react'
import { Button, FormControl, Card, Input, Container } from '@material-ui/core';

const FormPage = props => {
    const { initialName, onSubmitProp } = props;
    const [name, setName] = useState(initialName)

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({name});
        if(name.length > 3){
            alert(`Author "${name}" Saved!`);
        }
        setName("");
    }
    return (
        <div>
            <Container>
                <Card>
                    <form onSubmit ={onSubmitHandler}>
                        <FormControl>
                            <label htmlFor="name">Author Name:</label>
                            <Input type="text" name="name" onChange={(e) => setName(e.target.value) } value={name}/>
                            {/* show errors if necessary */}
                            <Button onClick={()=>setName("")}>Clear</Button>
                            <Button type="submit">Submit</Button>
                        </FormControl>
                    </form>
                </Card>
            </Container>
        </div>
    )
}

export default FormPage
