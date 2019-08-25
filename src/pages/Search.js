import React, { Fragment } from 'react';
import '../App.css';
import HeaderNav from '../Components/HeaderNav'
import MainContent from '../Components/MainContent';
import Footer from '../Components/Footer';




function App() {
  return (
    <Fragment>
      <HeaderNav/>
      <MainContent/>
      <Footer />
    </Fragment>  
  );
}

export default App;
