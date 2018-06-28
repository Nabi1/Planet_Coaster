import React from 'react';

const HomePage = () => (
  <div className="App">
    <div className="App-header">
      <h2
        style={{
          marginTop: 80,
          marginRight: '25%',
          marginLeft: '25%',
        }}
      >
        Holidays'Inn
      </h2>

      <img
        width="100%"
        src={require('../img/ap23.jpg')}
        alt="logo"
        className="brand-logo"
      />
    </div>
  </div>
);

export default HomePage;
