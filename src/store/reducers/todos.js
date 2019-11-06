const stateInitial = [
  {
    id: 1,
    text: "fazer nada"
  },
  {
    id: 1,
    text: "fazer cocô"
  }
]

const todos = (state = stateInitial, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { id: 99, text: action.payload.text }]

    default:
      return state;
  }
}

export default todos;