import * as actions from "../index";

describe("Test suite for Actions", () => {
  it("should create an action to add Todo", () => {
    const text = "go shopping";
    const expectedAction = {
      type: "ADD_TODO",
      id: 0,
      text,
    };

    expect(actions.addTodo(text)).toEqual(expectedAction);
  });

  it("should create an action to set visibility filter", () => {
    const filter = "SHOW_ALL";
    expect(actions.setVisibilityFilter(filter).filter).toEqual(filter);
    // make sure something else is false
    expect(actions.setVisibilityFilter(filter).filter).not.toBe("SHOW_ACTIVE");
  });

  it("should create an action to toggle a Todo", () => {
    const expectedAction = {
      type: "TOGGLE_TODO",
      id: 0,
    };
    expect(actions.toggleTodo(0)).toEqual(expectedAction);
  });
});
