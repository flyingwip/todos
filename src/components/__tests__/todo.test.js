import React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

// shallow rendering is good for component without child component
// if you want test a component in isolation

import { configure, shallow, mount } from "enzyme";

import Todo from "../Todo";

Enzyme.configure({ adapter: new Adapter() });

describe("<Todo /> component Unit test", () => {
  let component, props, mockFn;
  beforeEach(() => {
    // mock a jest
    mockFn = jest.fn();
    props = {
      onClick: mockFn,
      completed: false,
      text: "buy milk",
    };

    component = shallow(<Todo {...props} />);
  });

  it("should render 1 <Todo /> component", () => {
    expect(component).toHaveLength(1);
    expect(component.find("li")).toHaveLength(1);
  });

  it("should have a property with the todo description", () => {
    expect(component.props().children).toEqual("buy milk");
  });

  it("should set props to another value", () => {
    props.text = "Get groceries";
    component.setProps(props);
    expect(component.props().children).toContain("groceries");
  });

  it("should should fire onClick", () => {
    component.simulate("click");
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});

describe("<Todo /> styling behaviour", () => {
  // mock a jest
  const mockFn = jest.fn();
  it("should not have linethrough when todo is incomplete", () => {
    const component = shallow(
      <Todo onClick={mockFn} completed={false} text="go shopping" />
    );
    expect(component.props().style).toEqual({ textDecoration: "none" });
  });

  it("should have linethrough when todo is complete", () => {
    const component = shallow(
      <Todo onClick={mockFn} completed={true} text="go shopping" />
    );
    expect(component.props().style).toEqual({
      textDecoration: "line-through",
    });
  });
});

// full rendering
// we need to import mount
// for lifecylcle hooks
//     - componentDidMount
//     - componentDidUpdat
// when components has child components
// you have to do a full DOM rendering
