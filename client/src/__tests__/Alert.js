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

  test('Should render a  paragraph that contains expected mock value', () => {
    const element = findByTestAttr(wrapper, 'alert-para');
    expect(element.length).toBe(1);
    expect(element.text()).toEqual('mock');
  });

  test('should contain a SUCCESS class coming from context value', () => {
    const element = wrapper.find('.SUCCESS');
    expect(element.length).toBe(1);
  });
});

describe('Alert hidden', () => {
  let wrapper;
  beforeEach(() => {
    const contextValues = { text: '', msg: '' };

    // Below mounting is  needed as Enzyme does not yet support shallow mocks
    wrapper = mount(
      <AlertContextProvider value={contextValues}>
        <Alert />
      </AlertContextProvider>
    );
  });

  test('Should not contain SUCCESS class', () => {
    const element = wrapper.find('.alert');
    expect(element.hasClass('SUCCESS')).toBeFalsy();
  });

  test('Should not contain WARNING class', () => {
    const element = wrapper.find('.alert');
    expect(element.hasClass('WARNING')).toBeFalsy();
  });

  test('Should render a  paragraph that contains an empty string', () => {
    const element = findByTestAttr(wrapper, 'alert-para');
    expect(element.length).toBe(1);
    expect(element.text()).toEqual('');
  });
});
