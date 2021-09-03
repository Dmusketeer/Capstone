import './App.css';
import Header from './components/Header'
import Bids from './components/Bids'
import Login from './components/Login'
import Services from './components/Services'
import SignUp from './components/SignUp'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Error from './components/Error'
function App() {
  return (
    <div className="App">

      <Router>
        <Header />
        <Switch>
          <Route exact path="/services" component={Services} />
          <Route path="/bids" component={Bids} />
          <Route path="/login" component={Login} />
          <Route path="/signUp" component={SignUp} />
          <Route component={Error} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
