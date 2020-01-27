import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import './styles/theme.css';
import './styles/responsive.css';
import Routes from './routes';
import Header from './components/Header/Header';
import Home_Content from './components/Home_Content/Home_Content';
import Footer from './components/Footer/Footer';

function App() {
    return (
            <div className="App">
                <Header />
                <Routes />
                <Footer />
            </div>
            );
}

export default App;