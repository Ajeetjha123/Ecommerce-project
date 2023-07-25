import React, { Fragment } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
let App = () => {
  return (
    <Fragment>
      <Header />
      <Main />
      <Content />
      <Footer />
    </Fragment>
  );
}

export default App;
