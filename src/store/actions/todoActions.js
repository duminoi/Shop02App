export const addTodo = (todo) => {
  return {
    type: "todos/add",
    payload: todo,
  };
};

export const removeTodo = (id) => {
  return {
    type: "todos/remove",
    payload: id,
  };
};

export const completedTodo = (id, status) => {
  return {
    type: "todos/completed",
    payload: { id, status },
  };
};
