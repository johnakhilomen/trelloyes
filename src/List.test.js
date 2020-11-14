import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './list';

const header = 'a string';

const mockCards = [
    { id: 'a', title: 'First card', content: 'lorem ipsum' },
    { id: 'b', title: 'Second card', content: 'lorem ipsum' },
    { id: 'c', title: 'Third card', content: 'lorem ipsum' },]


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<List
    header = {header}
    cards = {mockCards} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

//<list 