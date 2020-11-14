import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Card from './card';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Card />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders markup as expected without props', () => {
    // Render the component, as JSON
    const tree = renderer.create(<Card />).toJSON();
    // Check whether it matches the previous snapshot
    // Stored in __snapshots__/Card.test.js.snap
    expect(tree).toMatchSnapshot(); 
});