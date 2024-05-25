import React from 'react';
import './App.css';
import Home from './pages/CustomerSide/Home';
import Cars from './pages/CustomerSide/Cars';
import Services from './pages/CustomerSide/Services';
import Contact from './pages/CustomerSide/Contact';
import About from './pages/CustomerSide/About';
import SignIn from './pages/CustomerSide/SignIn';
import SignUp from './pages/CustomerSide/SignUp';

import AdminDashboard from './pages/ManagementSide/AdminDashboard';
import CustomerSchedule from './pages/ManagementSide/CustomerSchedule';
import OngoingRentals from './pages/ManagementSide/OngoingRentals';
import CompletedTransaction from './pages/ManagementSide/CompletedTransaction';
import CancelledTransaction from './pages/ManagementSide/CancelledTransaction';
import VehicleList from './pages/ManagementSide/VehicleList';
import VehicleMaintenance from './pages/ManagementSide/VehicleMaintenance';
import CCTVSurveillance from './pages/ManagementSide/CCTVSurveillance';
import UserList from './pages/ManagementSide/UserList';
import Settings from './pages/ManagementSide/Settings';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          {/*CUSTOMER SIDE*/}
          <Route exact path="/" element={<Home />} />
          <Route path="/Cars" element={<Cars />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />

          {/*ADMIN SIDE*/}
          <Route path="/AdminDashboard" element={<AdminDashboard />} />
          <Route path="/CustomerSchedule" element={<CustomerSchedule />}/>
          <Route path="/OngoingRentals" element={<OngoingRentals />}/>
          <Route path="/CompletedTransaction" element={<CompletedTransaction />}/>
          <Route path="/CancelledTransaction" element={<CancelledTransaction />}/>
          <Route path="/VehicleList" element={<VehicleList />}/>
          <Route path="/VehicleMaintenance" element={<VehicleMaintenance />}/>
          <Route path="/CCTVSurveillance" element={<CCTVSurveillance />}/>
          <Route path="/UserList" element={<UserList />}/>
          <Route path="/Settings" element={<Settings />}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
