import React from 'react';
import { shallow } from 'enzyme';
import Alert from '../components/Alert';
import * as AlertContext from '../context/AlertContext';

describe('<Alert />', () => {
  test('it should mock the context', () => {
    const contextValues = { text: 'suca', msg: 'SUCCESS' };
    jest
      .spyOn(AlertContext, 'useAlertContext')
      .mockImplementation(() => contextValues);
    const wrapper = shallow(<Alert />);
    const element = wrapper.find('.alert');

    expect(element.length()).toBe(1);
  });
});

// test('enzyme dive', () => {
//   jest.spyOn(React, 'useContext').mockImplementation(context => ({
//     alert: {
//       text: '',
//       msg: ''
//     }
//   }));

//   const TestComponent = () => (
//     <AlertContext.Provider alert='Provided Value'>
//       <Alert />
//     </AlertContext.Provider>
//   );

//   const component = shallow(<TestComponent />);
//   console.log(component, 'coo');
//   expect(
//     component
//       .find(Alert)
//       .dive()
//       .find('alert')
//   ).toBe(1);

//   //   const wrapper = component.find('.alert');
//   //   expect(wrapper.length).toBe(1);

//   //   expect(
//   //     element
//   //       .find(Alert)
//   //       .dive()
//   //       .text()
//   //   ).toBe('Provided Value');
// });
