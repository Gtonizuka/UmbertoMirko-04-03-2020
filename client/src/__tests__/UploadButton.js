import React from 'react';
import { mount } from 'enzyme';
import UploadButton from '../components/UploadButton';
import FilesContextProvider, { FilesContext } from '../context/FilesContext';
import AlertContextProvider from '../context/AlertContext';
import { findByTestAttr } from '../utils/testUtils';

describe('Upload', () => {
  let wrapper;
  beforeEach(() => {
    const contextValues = { text: 'mock', msg: 'SUCCESS' };

    // Below mounting is  needed as Enzyme does not yet support shallow mocks
    wrapper = mount(
      <FilesContextProvider>
        <AlertContextProvider value={contextValues}>
          <UploadButton />
        </AlertContextProvider>
      </FilesContextProvider>
    );
  });

  test('should be defined', () => {
    expect(wrapper).toBeDefined();
  });

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should render a file input', () => {
    const element = findByTestAttr(wrapper, 'file-input');
    expect(element.length).toBe(1);
  });

  it('should have an input value', () => {
    expect(typeof wrapper.find('.custom-file-input').instance().value).toBe(
      'string'
    );
  });

  it('should render button value', () => {
    const element = findByTestAttr(wrapper, 'button');
    expect(element.length).toBe(1);
    expect(element.text()).toEqual('UPLOAD');
  });
});
