import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Form from './form_landing'

it('renders form without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Form />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders app without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
