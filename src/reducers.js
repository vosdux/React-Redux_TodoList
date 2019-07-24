import { combineReducers } from 'redux'
import { VisibilityFilters, SET_VISIBILITY_FILTER, TOGGLE_TODO, ADD_TODO } from './actions';
const { SHOW_ALL } = visibilityFilter;

function visibilityFilter(state = SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.type
        default: 
            return state
    }
}

function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO: 
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ]
            case TOGGLE_TODO:
                return state.map((todo, index) => {
                    if (index === action.index){
                        return Object.assign({}, todo, {
                            completed: !todo.completed
                        })
                    }
                    return todo
                })
            default:
                return state
    }
}

const todoApp = combineReducers({
    visibilityFilter,
    todos
})

export default todoApp


// function todoApp(state = {}, action) {
//     return {
//         visibilityFilter: visibilityFilter(state.visibilityFilter,action),
//         todos: todos(state.todos, action)
//     }
// }
    