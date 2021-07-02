import { Router, Route } from 'react-router-dom';
import { ROUTES_REACT } from '../routes';
import history from '../history';
import './App.css';
import HomeScreen from '../layouts/HomeScreen/HomeScreen';
import Dashboard from '../comp_func/Dashboard/Dashboard';

function App() {
  const { root, dashboard } = ROUTES_REACT;
  return (
    <div>
      <Router history={history}>
        <>
          <Route path={root} exact component={HomeScreen} />
          <Route path={dashboard} exact component={Dashboard} />
        </>
      </Router>
    </div>
  );
}

export default App;
