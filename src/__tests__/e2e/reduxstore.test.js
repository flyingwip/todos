import { createStore } from "redux";
import rootReducer from "../../reducers";
import { addTod, addTodo, toggleTodo } from "../../actions";

describe("Redux Store Integration Tests", () => {
  let store;
  beforeEach(() => {
    store = createStore(rootReducer);
  });

  it("should add 1 todo", () => {
    // dispatch an action
    store.dispatch(addTodo("Feed the cat"));

    const todo = store
      .getState()
      .todos.find((item) => item.text === "Feed the cat");

    expect(todo.text).toEqual("Feed the cat");
    expect(todo.completed).toEqual(false);
    // console.log(store.getState());
  });

  it("should toggle 1 todo", () => {
    store.dispatch(addTodo("Feed the cat"));

    const { id } = store.getState().todos[0];

    // dispatch the toggle
    store.dispatch(toggleTodo(id));

    const todo = store.getState().todos.find((item) => item.id === id);
    expect(todo.completed).toEqual(true);
  });
});
