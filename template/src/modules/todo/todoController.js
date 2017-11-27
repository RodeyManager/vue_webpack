/**
 * Created by Rodey on 2017/11/21
 */

import { ALL, COMPLETED, UNCOMPLETED } from './todoStates';

export default class TodoController {

    constructor(){
        this.init();
    }

    init(){
        this.todos = this.getItem();
    }

    add(todo){
        this.init();
        this.todos.push(todo);
        localStorage.setItem('_todos_', JSON.stringify(this.todos));
    }

    update(todo, index){
        this.init();
        index = typeof(index) !== 'undefined' ? index : this.todos.indexOf(todo);
        if(index > -1){
            this.todos[index].content   = todo.content;
            this.todos[index].completed = todo.completed;
            this.setItem();
        }
    }

    remove(index){
        if(index > -1){
            this.todos.splice(index, 1);
            this.setItem();
        }
    }

    getTodos(type){
        this.init();
        switch(type){
            case ALL:
                return this.todos;
            case COMPLETED:
                return this.todos.filter(todo => todo.completed);
            case UNCOMPLETED:
                return this.todos.filter(todo => !todo.completed);
        }
    }

    getAllTodos(){
        return this.getTodos(ALL);
    }

    getCompletedTodos(){
        return this.getTodos(COMPLETED);
    }

    getUncompletedTodos(){
        return this.getTodos(UNCOMPLETED);
    }

    setItem(){
        localStorage.setItem('_todos_', JSON.stringify(this.todos));
    }

    getItem(){
        return JSON.parse(localStorage.getItem('_todos_')) || [];
    }
}
 