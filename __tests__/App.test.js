import React from 'react';
import Enzyme, { mount } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import App from '../components/App';

describe('App tests', () => {

    test('Counter heading exists', () => {

        const screen = mount(<App />);
        const heading = screen.find("#heading");
        expect(heading).not.toBeNull();
        expect(heading.text()).toEqual('Counter')
    })

    test('Counter element exists', () => {

        const screen = mount(<App />);
        const count = screen.find("#count");

        expect(count).not.toBeNull();
        expect(count.text()).toEqual('0');
    })

    test('Increment counter button exists', () => {

        const screen = mount(<App />);
        const incCountButton = screen.find("#incCount");
        expect(incCountButton).not.toBeNull();
    })

    test('Counter increments', () => {

        const screen = mount(<App />);

        const incCountButton = screen.find("#incCount");
        const count = screen.find("#count");
        
        expect(incCountButton).not.toBeNull();
        expect(count).not.toBeNull();

        expect(count.text()).toEqual('0');
        incCountButton.simulate('click');
        expect(count.text()).toEqual('1');
    })

    test('Child component Counter exists', () => {

        const screen = mount(<App />);

        expect(screen.debug().indexOf('<Counter')).not.toEqual(-1);
        expect(screen.debug().lastIndexOf('</Counter>')).not.toEqual(-1);
    })

    test('Counter increments twice', () => {

        const screen = mount(<App />);

        const incCountButton = screen.find("#incCount");
        const count = screen.find("#count");
        
        expect(incCountButton).not.toBeNull();
        expect(count).not.toBeNull();

        expect(count.text().trim()).toEqual('0');
        
        incCountButton.simulate('click');
        expect(count.text().trim()).toEqual('1');

        incCountButton.simulate('click');
        expect(count.text().trim()).toEqual('2');
    })
})