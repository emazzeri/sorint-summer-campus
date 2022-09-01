import React from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import Content from './component/Content';
import './app.css'

const App = () => (
  <div className='ssc-app'>
    <Header title="Sorint Summer Campus"/>
    <Content />
    <Footer footerText="All rights reserved"/>
  </div>
)

export default App;
