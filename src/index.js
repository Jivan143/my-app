import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'font-awesome/css/font-awesome.min.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter} from 'react-router-dom';
import CarNav from './components/cardata/carNav.jsx';
import MainComponentCar from './components/cardata/MainComponentCar.jsx';
import Books8 from './components/booksapp/Books8.jsx';
import MainBooks8 from './components/booksapp/MainBooks8.jsx';
import EmployeeMain from './components/EmployeesApp/EmployeeDBMain.jsx';
import MobileTable from './components/mobileApp/mobileDBtable.jsx';
import MobileDBMain from './components/mobileApp/mobileDBMain.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <MobileDBMain />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
