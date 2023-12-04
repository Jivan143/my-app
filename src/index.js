import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'font-awesome/css/font-awesome.min.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter} from 'react-router-dom';
import JsMainComponent from './components/jsMainComponent';
import JsMainBooks from './components/ZA24/JsMainBook.jsx';
import A74MainPizza from './components/AssignmentA4A7/A74Mainpizza.jsx';
import Guardians from './components/avccccc/Guardian.jsx';
import GuarianNavBar from './components/avccccc/GuarianNavBar.jsx';
import MainGuardian from './components/avccccc/MainGuardian.jsx';
import MainComponentlife from './components/Componentlifecycle/mainComponentlife.jsx';
import JsMainCompPerson from './components/JsMainCompPerson.jsx';
import StudentsApp from './components/StudentApp/StudentstApp.jsx';
import NavbarstApp from './components/StudentApp/NavbarstApp.jsx';
import MainComponentsApp from './components/StudentApp/MainComponentstApp.jsx';
import CustomerMain from './components/customrApp/CustomerMain.jsx';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <CustomerMain />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
