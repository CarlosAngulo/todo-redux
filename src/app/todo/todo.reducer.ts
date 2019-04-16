import * as fromTodo from './todo.actions';
import { Todo } from './model/todo.model'

const todo1 = new Todo('Vencer a Thanos');
const todo2 = new Todo('Salvar el mundo');
todo1.completed = true;

const initialState: Todo[] = [todo1, todo2];

export function TodoReducer(state:Todo[] = initialState, action: fromTodo.Actions) {
    switch( action.type ) {
        case fromTodo.ADD_TODO :
            const todo = new Todo( action.payload );
            return [...state, todo];

        case fromTodo.TOGGLE_TODO :
            return state.map( todoEdit => {
                if (todoEdit.id === action.id ) {
                    return {
                        ...todoEdit,
                        completed: !todoEdit.completed
                    };
                } else {
                    return todoEdit;
                }
            });

        case fromTodo.EDIT_TODO : 
            return state.map( todoEdit => {
                if( todoEdit.id === action.id ) {
                    return {
                        ...todoEdit,
                        text: action.text
                    };
                } else {
                    return todoEdit;
                }
            });

        case fromTodo.DELETE_TODO :
            return state.filter( todoDelete => todoDelete.id !== action.id );

        case fromTodo.TOGGLE_ALL_TODO :        
            return state.map( todoDelete => {
                return {
                    ...todoDelete,
                    completed: action.completed
                };
            });

        default:
            return state;
    }
}