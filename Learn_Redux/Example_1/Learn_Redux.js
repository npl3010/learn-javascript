console.log(window.Redux);
const { createStore } = window.Redux;


// ____________________________________________________________________________________________________
/**
 * STEP 1: Set up Redux store:
 */

// 1. State:
const initialState = {
    uid: 'me',
    todos: ['This is a sample.']
};

// 2. Reducer:
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
        default: {
            return state;
        }
    }
};

// 3. Redux store:
const store = createStore(todoReducer);


// ____________________________________________________________________________________________________
/**
 * STEP 2: Functions:
 */

const renderToDoList = (toDoList) => {
    if (!Array.isArray(toDoList) || toDoList.length === 0) {
        return;
    }

    const toDoListItemsElement = document.querySelector('#todolist .todolist-items');
    if (!toDoListItemsElement) {
        return;
    } else {
        toDoListItemsElement.innerHTML = '';
        for (const todo of toDoList) {
            const todoElement = document.createElement('li');
            todoElement.classList.add('todo');
            todoElement.textContent = todo;
            toDoListItemsElement.appendChild(todoElement);
        }
    }
};


// ____________________________________________________________________________________________________
/**
 * STEP 3: Render initial to-do list:
 */

const initialToDoList = store.getState().todos;
renderToDoList(initialToDoList);


// ____________________________________________________________________________________________________
/**
 * STEP 4: Handle events:
 */

const todolistFormElement = document.querySelector('#todolist-form');
if (todolistFormElement) {
    todolistFormElement.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get new to-do:
        const todoInputElement = todolistFormElement.querySelector('#todo-input');
        console.dir(todoInputElement.value);

        // If value is valid:
        if (todoInputElement.value) {
            // Update Redux state:
            const action = {
                type: 'ADD_TODO',
                payload: todoInputElement.value
            };
            store.dispatch(action);

            // Clear form:
            todoInputElement.value = '';
        }
    });
}


// ____________________________________________________________________________________________________
/**
 * STEP 5: Listen for Redux state updates:
 */

store.subscribe(() => {
    renderToDoList(store.getState().todos);
});