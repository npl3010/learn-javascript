console.log(window.Redux);
const { createStore } = window.Redux;
// Reducers:
import rootReducer from "./reducers/index.js";
// Actions:
import { addNewTodo, deleteTodoByIndex } from "./actions/todo.js";
import { setThemeToDark, setThemeToLight } from "./actions/theme.js";


// ____________________________________________________________________________________________________
/**
 * STEP 1: Set up Redux store:
 */

const store = createStore(rootReducer);


// ____________________________________________________________________________________________________
/**
 * STEP 2: Functions:
 */

const renderToDoList = (toDoList) => {
    if (!Array.isArray(toDoList)) {
        return;
    }

    const toDoListItemsElement = document.querySelector('#todolist .todolist-items');
    if (!toDoListItemsElement) {
        return;
    } else {
        toDoListItemsElement.innerHTML = '';

        for (let i = 0; i < toDoList.length; i++) {
            const todoElement = document.createElement('li');
            todoElement.textContent = toDoList[i];

            todoElement.classList.add('todo');
            todoElement.onclick = () => {
                store.dispatch(deleteTodoByIndex(i));
            };

            toDoListItemsElement.appendChild(todoElement);
        }
    }
};

const renderTheme = (bgColor = '#eee', txtColor = '#000', currentTheme = 'light') => {
    const bodyElement = document.getElementsByTagName('body');
    for (let i = 0; i < bodyElement.length; i++) {
        bodyElement[i].style.backgroundColor = bgColor;
        bodyElement[i].style.color = txtColor;
        document.getElementById('change-theme-btn').innerHTML = `Change theme to '${currentTheme}'!`;
    }
};


// ____________________________________________________________________________________________________
/**
 * STEP 3: Render initial to-do list & theme:
 */
renderToDoList(store.getState().todo.todos);
renderTheme(store.getState().theme.bgColor, store.getState().theme.txtColor);


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
            store.dispatch(addNewTodo(todoInputElement.value));

            // Clear form:
            todoInputElement.value = '';
        }
    });
}

const themeBtnElement = document.getElementById('change-theme-btn');
if (themeBtnElement) {
    themeBtnElement.addEventListener('click', (e) => {
        if (store.getState().theme.currentTheme === 'light') {
            store.dispatch(setThemeToDark());
        } else {
            store.dispatch(setThemeToLight());
        }
    });
}


// ____________________________________________________________________________________________________
/**
 * STEP 5: Listen for Redux state updates:
 */

store.subscribe(() => {
    renderTheme(store.getState().theme.bgColor, store.getState().theme.txtColor, store.getState().theme.currentTheme);
    renderToDoList(store.getState().todo.todos);
});