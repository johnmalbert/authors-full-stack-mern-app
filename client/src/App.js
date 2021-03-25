import './App.css';
import { Button, Card, Container } from '@material-ui/core';
import { Router, Link } from '@reach/router';
import AllAuthors from './components/AllAuthors';
import Main from './components/Main';
import Detail from './components/Detail';
import Update from './components/Update';


function App() {

  return (
    <div className="App">
      <Container maxWidth="md">
        <Card> 
          <Button color="primary"><Link to="/authors">All Authors </Link> </Button>
          <Button color="primary"><Link to="/authors/create">Add an Author </Link> </Button>
        </Card>
      </Container>

      <Router>
        <Main path="/authors/create"/>
        <AllAuthors path="/authors"/> 
        <Detail path="/authors/:id" />
        <Update path="/authors/:id/update" />
        
      </Router>

    </div>
  );
}

export default App;
