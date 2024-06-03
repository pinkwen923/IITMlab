import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LabWeb from './content/labweb';
import Footer from './footer/footer';
import reportWebVitals from './reportWebVitals';
import { HashRouter as Router } from 'react-router-dom'; // 將 BrowserRouter 改為 HashRouter

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <LabWeb />
    <Footer />
  </Router>
);

reportWebVitals();
