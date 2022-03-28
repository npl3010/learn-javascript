const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


// ****************************************************************************************************
// Test:
// const appTest = (function () {
//     const todoList = ['Initial todo!'];

//     return {
//         getData: () => {
//             return todoList;
//         },
//         test_1_1: () => {
//             console.log(`Test 1.1:`, this);
//             // console.log(`Test:`, this.getData()); // Error!
//         },
//         test_1_2: function () {
//             console.log(`Test 1.2:`, this);
//             // console.log(`Test:`, this.getData()); // Accepted!
//         }
//     };
// })();

// appTest.test_1_1()
// appTest.test_1_2()


// ****************************************************************************************************
// App:
const app = (function () {
    // State:
    const todoList = ['Initial todo!', 'd'];

    // DOM element:
    const inputTodo = $('#todo-input');
    const btnAddTodo = $('#add-todo-button');
    const ulTodoList = $('.todo-list');

    return {
        addTodo: (newTodo = '') => {
            if (newTodo) {
                todoList.push(newTodo);
            }
        },
        removeTodo: (todoIndex = -1) => {
            if (todoIndex >= 0) {
                todoList.splice(todoIndex, 1);
            }
        },
        handleRemoveTodo: function (e) {
            console.log(this)
            // Find the closest ancestor element that has a specific class:
            const btnRemoveTodo = e.target.closest('.todo-item__remove-btn');
            if (btnRemoveTodo) {
                this.removeTodo(btnRemoveTodo.dataset['todoIndex']);
                this.render();
            }
        },
        render: () => {
            ulTodoList.innerHTML = (todoList.map((todo, index) => {
                return (`
                    <li class="todo-item">
                        <span class="todo-item__content">${todo}</span>
                        <span class="todo-item__remove-btn" data-todo-index="${index}">&#10006;</span>
                    </li>
                `);
            }).join(''));
        },
        init: function () {
            /**
             * Handle event for btnAddTodo:
             */
            // Using regular function causes error here!
            // Using arrow function is accepted here!
            btnAddTodo.onclick = () => {
                // Add new todo:
                this.addTodo(inputTodo.value)
                this.render();
                // Clear form:
                inputTodo.value = null;
                inputTodo.focus();
            }

            /**
             * Handle event for ulTodoList:
             */
            // - Solution 1:
            ulTodoList.onclick = (function (e) {
                console.log(this)
                this.handleRemoveTodo(e)
            }).bind(this)
            // - Solution 2:
            ulTodoList.onclick = this.handleRemoveTodo.bind(this);

            /**
             * Render:
             */
            this.render();
        }
    };
})();

app.init()