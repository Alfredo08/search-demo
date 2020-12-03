import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import App from './App';

const obj = {
  name : "Jenny"
}

// Smoke test
it ('Should load the App component correctly', () => {
  let container = document.createElement( 'div' );
  ReactDOM.render( <App userName={obj}/>, container );
  ReactDOM.unmountComponentAtNode( container );
});

