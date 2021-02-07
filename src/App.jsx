import Header from './Modules/Header/Header';
import './assets/App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NewsList from './Modules/NewsList/NewsList';

function App() {
  return (
    <Router basename='/'>
    <div className="app-main">
      <Header/>
      <div className="app-content">
        <Switch>
          <Route path='/' exact><NewsList/></Route>
          <Route path='/category/:category' component={NewsList}/>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
