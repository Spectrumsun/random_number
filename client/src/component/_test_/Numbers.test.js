import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import moxios from 'moxios';
import Number from '../Numbers';

Enzyme.configure({ adapter: new Adapter() });
describe('<RandomNumber />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Number />);
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should display saved numbers', async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
            success: true,
            message: "Number List",
            savedNumbers: ["0652653715", "0171453496", "0366597054"]
        }
      })
    })
    const component = mount(<Number />);
    const spy = jest.spyOn(component.instance(), 'getNumbers');
    await spy()
    const state = component.instance().state;
    expect(spy).toHaveBeenCalled();
    expect(state.numbers).toEqual( ["0652653715", "0171453496", "0366597054"]);
  });

  it('should generate new numbers', async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
            success: true,
            message: "Number List",
            newNumbers: ["0652653715", "0171453496", "0366597054"]
        }
      })
    })
    const component = mount(<Number />);
    const spy = jest.spyOn(component.instance(), 'handleGenerate');
    await spy()
    const state = component.instance().state;
    expect(spy).toHaveBeenCalled();
    expect(state.random).toEqual( ["0652653715", "0171453496", "0366597054"]);
  });


  it('should show the max number on click', () => {
    const component = mount(<Number />);
    const spy = jest.spyOn(component.instance(), 'sortAscending');
    component.setState({
      numbers:  ["0652653715", "0171453496", "0366597054"]
    })
    component.find('.space_button').simulate('click');
    const state = component.instance().state;
    expect(spy).toHaveBeenCalled();
    expect(state.numbers).toEqual([ '0171453496', '0366597054', '0652653715'])
  });

  it('should show the min number on click', () => {
    const component = mount(<Number />);
    const spy = jest.spyOn(component.instance(), 'sortDescending');
    component.setState({
      numbers:  ["0652653715", "0171453496", "0366597054"]
    })
    component.find('#sortDescending').simulate('click');
    const state = component.instance().state;
    expect(spy).toHaveBeenCalled();
    expect(state.numbers).toEqual(['0652653715', '0366597054', '0171453496'])
  });
});