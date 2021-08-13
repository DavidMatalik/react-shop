import './App.css';
import Home from './Home'
import Shop from './Shop'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        <Route path='/' exact component={Home} />
        <Route path='/shop' component={Shop} />
      </Router>
    </div>
  );
}

export default App;
