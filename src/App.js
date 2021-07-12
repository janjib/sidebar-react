import './App.css';
import Sidebar from './Components/Sidebar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Overview from './pages/Overview';
import Reports from './pages/Reports';

function App() {
  return (
    <>
    <Router>
      <Sidebar/>
      <Switch>
        <Route path='/sidebar-react' exact component={Overview} />
        <Route path='/sidebar-react/reports1' exact component={Reports} />
      </Switch>
      </Router>
    </>
  );
}

export default App;
