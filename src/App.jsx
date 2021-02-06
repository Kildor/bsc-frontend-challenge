import Header from './mixins/Header';
import './assets/App.scss';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Tab from './mixins/Tab';

function App() {
  return (
    <Router>
    <div className="app-main">
      <Header/>
      <div className="app-content"></div>
    </div>
    </Router>
  );
}

export default App;
