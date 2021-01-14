import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

import RandomCard from './components/RandomCard';
import SearchCard from './components/SearchCard';

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/random">Random</Link> <br/>
        <Link to="/search">Search</Link>


        <Switch>
          <Route path="/random" component={RandomCard}/>
          <Route path="/search" component={SearchCard}/>
        </Switch>
        
      </Router>
      

      
    </div>
  );
}

export default App;
