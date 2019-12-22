import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ErrorBoundary from './components/error-boundary/error-boundary';
import App from './App';
import * as serviceWorker from './serviceWorker';

function Root() {
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
}

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
