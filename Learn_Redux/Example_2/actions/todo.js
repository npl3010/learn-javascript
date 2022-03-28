const addNewTodo = (newTodo) => {
    return {
        type: 'ADD_TODO',
        payload: newTodo
    };
}

const deleteTodoByIndex = (todoIndex) => {
    return {
        type: 'DELETE_TODO_BY_INDEX',
        payload: todoIndex
    };
}

export { addNewTodo, deleteTodoByIndex };