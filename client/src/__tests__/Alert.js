import React from 'react';
import { mount } from 'enzyme';
import Alert from '../components/Alert';
import AlertContextProvider from '../context/AlertContext';
import { findByTestAttr } from '../utils/testUtils';

describe('Alert', () => {
  let wrapper;
  beforeEach(() => {
    const contextValues = { text: 'mock', msg: 'SUCCESS' };

    // Below mounting is  needed as Enzyme does not yet support shallow mocks
    wrapper = mount(
      <AlertContextProvider value={contextValues}>
        <Alert />
      </AlertContextProvider>
    );
  });

  test('should be defined', () => {
    expect(wrapper).toBeDefined();
  });

  test('Should have a single node containing an alert class', () => {
    const element = wrapper.find('.alert');
    expect(element.length).toBe(1);
  });

  test('Should render a  paragraph', () => {
    const element = findByTestAttr(wrapper, 'alert-para');
    expect(element.length).toBe(1);
    // this is empty by default
    expect(element.text()).toEqual('');
  });
});
