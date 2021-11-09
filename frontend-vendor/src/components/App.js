import React, {useState} from 'react';
import './App.css';
import Header from './vendors/Header/Header';
import Footer from './vendors/Footer/Footer';
import LoginForm from './vendors/LoginForm/LoginForm';
import RegistrationForm from './vendors/RegistrationForm/RegistrationForm';
import Home from './vendors/Home/Home';
import PrivateRoute from './utils/PrivateRoute';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AlertComponent from './vendors/AlertComponent/AlertComponent';  
import VendorForm from './vendors/VendorForm/VendorForm';
function App() {
  const [title, updateTitle] = useState(null);
  const [email, updateEmail] = useState(null);
  const [errorMessage, updateErrorMessage] = useState(null);
  return (
    <Router>
    <div className="App">
      <Header title={title}/>
        <div className="container d-flex align-items-center flex-column">
          <Switch>
            <Route path="/" exact={true}>
              <RegistrationForm showError={updateErrorMessage} updateTitle={updateTitle}/>
            </Route>
            <Route path="/register">
              <RegistrationForm showError={updateErrorMessage} updateTitle={updateTitle}/>
            </Route>
            <Route path="/login">
              <LoginForm showError={updateErrorMessage} updateTitle={updateTitle} updateEmail={updateEmail}/>
            </Route>
            <PrivateRoute path="/home" email="chmt.raghuveer@gmail.com">
              <Home/>
            </PrivateRoute>
            <PrivateRoute path="/vendorforms">
              <VendorForm/>
            </PrivateRoute>
          </Switch>
          <AlertComponent errorMessage={errorMessage} hideError={updateErrorMessage}/>
        </div>
        <Footer title={title}/>
    </div>
    </Router>
  );
}

export default App;