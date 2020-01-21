import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';
import Footer from '../../components/Footer';

describe('<Footer />', () => {
  const footer = mount(<Footer />);

  test('Render of the Footer component', () => {
    expect(footer.length).toEqual(1);
  });
  test('Render of title', () => {
    expect(footer.find('.Footer-title').text()).toEqual('React Store');
  });
});

describe('Footer Snapshot', () => {
  test('Check the UI of the Footer component', () => {
    const footer = create(<Footer />);
    expect(footer.toJSON()).toMatchSnapshot();
  });
});
