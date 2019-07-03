import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, render, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { createSerializer } from "enzyme-to-json";
import sinon from "sinon";

import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// it('calls "handleEditClick()" on button click - using prototype', () => {
//   // const spy = jest.spyOn(App.prototype, 'handleEditClick');
//   // const wrapper = mount(<App />);
//   // wrapper.find('button').simulate('click', 'using prototype');

//   const wrapper = mount(<App />);
//   const spy = jest.spyOn(wrapper.instance(), 'handleEditClick'); // replace function via reference
//   wrapper.update(); // forceUpdate()
//   wrapper.find('button').first().simulate('click'); // actually calls the spy function

//   console.log(wrapper.find('button').first().text())
//   expect(spy).toHaveBeenCalled();
// });