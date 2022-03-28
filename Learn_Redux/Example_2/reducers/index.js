const { combineReducers } = window.Redux;
// Reducers:
import themeReducer from "./theme.js";
import todoReducer from "./todo.js";


const rootReducer = combineReducers({
    theme: themeReducer,
    todo: todoReducer
});

export default rootReducer;