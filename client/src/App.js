//import logo from './assets/company_shift_logo.png';
//import company from './assets/company_shift.png';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import ManagementHome from './pages/shift_management';
import "./App.css";
import CreateShift from "./components/modal/CreateShift";

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/createshift">Create Shift</Link>
        <Switch>
          <Route path="/createShift" component={CreateShift} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
