import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { uuid } from "uuidv4";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import Weather from "./Weather";
import Electronics from "./Electronics";
import UserDashBoard from "./UserDashBoard";
import Navbar from "./Navbar";
import Time from "./time";
import AddList from "./AddList";
import DisplayList from "./DisplayList";
import Login from "./Login";
import VendorForm from "./vendorform";
import VendorRegistration from "./vendorregistration";
import VendorItems from "./VendorItems";

//import UserDashBoard from "./UserDashBoard";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  const [place, setPlace] = useState([]);


  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };

  const addPlaceHandler = (place) => {
    console.log(place);
    setPlace([...place]);
  };



  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) setContacts(retriveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={UserDashBoard} />
        <Route path='/electronics' component={Electronics} />
        <Route path='/time' component={Time} />
        <Route path='/weather' component={Weather} />
        <Route path='/addlist' component={AddList} />
        <Route path='/displaylist' component={DisplayList} />
        <Route path='/login' component={Login} />
        <Route path='/vendorform' component={VendorForm} />
        <Route path='/vendorregistration' component={VendorRegistration} />
        <Route path='/vendorItems' component={VendorItems} />


      </Switch>
    </Router>
  );
}

export default App;