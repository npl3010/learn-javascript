const initialState = {
    uid: 'me',
    todos: ['This is a sample.']
};

const todoReducer = (state = initialState, action = { type: '' }) => {
    switch (action.type) {
        case 'ADD_TODO': {
            const newTodos = [...state.todos];
            newTodos.push(action.payload);
            return {
                ...state,
                todos: newTodos
            };
        }
        case 'DELETE_TODO_BY_INDEX': {
            const newTodos = [...state.todos];
            newTodos.splice(action.payload, 1);
            return {
                ...state,
                todos: newTodos
            };
        }
        default: {
            return state;
        }
    }
};

export default todoReducer;