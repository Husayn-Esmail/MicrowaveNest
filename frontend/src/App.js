import './App.css';

import React, { useState, useEffect } from 'react';
import MessageChangeForm from './components/message_change.component';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Routes, Route } from 'react-router-dom';
import BuildingsList from './components/buildings_admin.component';
import AddBuilding from './components/add_buildings.component';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:8080/')
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div className="App">
      <h1>{message}</h1>
      <MessageChangeForm />
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/buildings" className="navbar-brand">
            MicrowaveNest
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={'/buildings'} className="nav-link">
                Buildings
              </Link>
            </li>
            <li className="nav-item">
              <Link to={'/add'} className="nav-link">
                Add
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<BuildingsList />} />
            <Route path="/buildings" element={<BuildingsList />} />
            <Route path="/add" element={<AddBuilding />} />
            {/* <Route path="/buidlings/:id" element={<Building/>} /> */}
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
