import { Router, Route } from 'react-router-dom';
import { ROUTES } from '../standards/routes';
import history from '../history';
import './App.css';
import HomeScreen from '../layouts/HomeScreen/HomeScreen';

function App() {
  const { root } = ROUTES;
  return (
    <div>
      <Router history={history}>
        <div>
          <Route path={root} component={HomeScreen} />
        </div>
      </Router>
    </div>
  );
}

export default App;
