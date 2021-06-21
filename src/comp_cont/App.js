import history from "../history";
// import { Router, Route } from "react-router-dom";
import { Router } from "react-router-dom";
import './App.css';
// import { ROUTES } from "../standards/routes";

function App() {
  // const { root } = ROUTES
  return (
    <div>
      <Router history={ history}>
        <div>
          {/* <Route path={root}/> */}
          This is an App
        </div>
      </Router>
    </div>
  );
}

export default App;
