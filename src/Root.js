import React from 'react';
import ErrorBoundary from './components/error-boundary/error-boundary';
import App from './App';

const Root = () => {
  return (
    <div style={{ maxWidth: 1200, backgroundColor: '#FFF', margin: 'auto' }}>
      <center>
        <h1>Exercises List</h1>
      </center>
      <hr />
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </div>
  );
};

export default Root;
