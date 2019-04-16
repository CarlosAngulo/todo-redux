import * as fromFilter from './filter.actions';

const initialState: fromFilter.validFilters = 'all';

export function filterReducer( state = initialState, action: fromFilter.actions ) {
    switch ( action.type ) {
        case fromFilter.SET_FILTER:
            return action.payload;

        default:
            return state;
    }
}