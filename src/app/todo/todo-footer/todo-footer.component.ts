import { Component, OnInit } from '@angular/core';
import * as fromFilter from '../../filter/filter.actions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { Todo } from '../model/todo.model';
import { DeleteCompletedTodoAction } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  validFilters: fromFilter.validFilters[] = ['all', 'completed', 'pending'];
  currentFilter: fromFilter.validFilters;
  allPendingTaskNumber: number;

  constructor( private store:Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe( state => {
      this.countPending(state.todos);
      this.currentFilter = state.filter;
    });
  }

  countPending( todoList: Todo[] ) {
    this.allPendingTaskNumber = todoList.filter( todo => !todo.completed ).length;
  }

  changeFilter(newFilter:fromFilter.validFilters){
    const action = new fromFilter.SetFilterAction(newFilter);
    this.store.dispatch(action);
  }

  clearCompleted() {
    const action = new DeleteCompletedTodoAction();
    this.store.dispatch(action);
  }

}
