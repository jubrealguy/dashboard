import React from "react";
import { shallow } from "enzyme";
import Header from './Header'

test('Header renders without crashing', () => {
    const wrapper = shallow (<Header />)
    expect(wrapper.exists()).toBe(true) 
})

test('Header renders img and h1 tags', () => {
    const wrapper = shallow(<Header />);
    const imgElement = wrapper.find('img');
    const h1Element = wrapper.find('h1');
  
    // Ensure img tag is present
    expect(imgElement.exists()).toBe(true);
  
    // Ensure h1 tag is present
    expect(h1Element.exists()).toBe(true);
  });