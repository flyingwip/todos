import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { v4 as uuidv4 } from 'uuid'

// shallow rendering is good for component without child component
// if you want test a component in isolation

import { configure, shallow, mount } from 'enzyme'

import Todo from '../Todo'

Enzyme.configure({ adapter: new Adapter() })

describe('<Todo /> component Unit test', () => {
    let component, props, mockFn
    beforeEach(() => {
        // mock a jest
        mockFn = jest.fn()
        props = {
            onClick: mockFn,
            completed: false,
            text: 'buy milk',
            id: uuidv4(),
        }

        component = shallow(<Todo {...props} />)
    })

    it('should render 1 <Todo /> component', () => {
        expect(component).toHaveLength(1)
        expect(component.find('li')).toHaveLength(1)
    })

    it('should have a property with the todo description', () => {
        expect(component.props().children[1].props.children[2]).toEqual(
            'buy milk'
        )
    })

    it('should set props to another value', () => {
        props.text = 'Get groceries'
        component.setProps(props)
        expect(component.props().children[1].props.children[2]).toContain(
            'groceries'
        )
    })

    it('should should fire onClick', () => {
        const checkbox = shallow(component.props().children[0])

        checkbox.simulate('click')
        expect(mockFn).toHaveBeenCalledTimes(1)
    })
})

describe('<Todo /> styling behaviour', () => {
    // mock a jest
    const mockFn = jest.fn()
    it('should not have linethrough when todo is incomplete', () => {
        const component = shallow(
            <Todo
                onClick={mockFn}
                completed={false}
                text="go shopping"
                id={uuidv4()}
            />
        )
        expect(component.props().style).toEqual({ textDecoration: 'none' })
    })

    it('should have linethrough when todo is complete', () => {
        const component = shallow(
            <Todo
                onClick={mockFn}
                completed={true}
                text="go shopping"
                id={uuidv4()}
            />
        )

        expect(component.props().style).toEqual({
            textDecoration: 'line-through',
        })
    })
})
