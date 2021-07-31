import './App.css';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';
// import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className='container'>
          <Switch>
            <Route path='/' exact component={ListEmployeeComponent}></Route>
            <Route path='/employees' component={ListEmployeeComponent}></Route>
            <Route
              path='/add-employees/:id'
              component={CreateEmployeeComponent}
            ></Route>
            {/*<Route
              path='/update-employee/:id'
              component={UpdateEmployeeComponent}
            ></Route> */}
            <Route
              path='/view-employees/:id'
              component={ViewEmployeeComponent}
            ></Route>
          </Switch>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
