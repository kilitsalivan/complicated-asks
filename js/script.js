'use strict';
class Todo {
    constructor(form, input, todoList, todoCompleted) {
        this.form = document.querySelector(form);
        this.input = document.querySelector(input);
        this.todoList = document.querySelector(todoList);
        this.todoCompleted = document.querySelector(todoCompleted);    
        this.todoData = new Map(JSON.parse(localStorage.getItem('toDoList')));
    }
    addToStorage(){
        localStorage.setItem('toDoList',JSON.stringify([...this.todoData]));
    }
    render (){
        this.todoCompleted.textContent = ''; 
        this.todoList.textContent = '';
        this.todoData.forEach(this.createItem,this);
        this.addToStorage();
    }
    createItem(todo) {
        const li = document.createElement('li');
        li.classList.add('todo-item');
        li.key = todo.key; 
        li.insertAdjacentHTML('beforeend',`<span class="text-todo">${todo.value}</span>
        <div class="todo-buttons">
            <button class="todo-remove"></button>
            <button class="todo-complete"></button>
        </div>`);

if (todo.completed){
    this.todoCompleted.append(li);
}else {
    this.todoList.append(li);
}
}
    
    addTodo(e) {
        e.preventDefault();
        console.log(this);
      if (this.input.value.trim() ===''){
          alert('Пустое дело добавить нельзя!');
      }else
        {
            const newTodo = {
                value: this.input.value,
                completed: false,
                key: this.generateKey(),
            };    
        this.todoData.set(newTodo.key,newTodo);
        this.render();
        }
        }
    generateKey() {
            return Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15);
        }
    
    deleteItem (k){
        this.todoData.forEach((elem,i) =>{
           if (elem.key === k.key ){  k.remove(); this.todoData.delete(i);   
              console.log(elem,i);
          }  
        this.render (); 
        });  
       
    }
    
    completedItem(k){
        this.todoData.forEach((elem,i) =>{
        if (elem.key === k.key ){   elem.completed = true;}  
         this.render (); 
         });  
   }
    
    handler(){
        const todoContainer = document.querySelector('.todo-container');
            console.log(todoContainer);
        todoContainer.addEventListener('click', (event) =>{
            let target = event.target;
        if (target.closest('.todo-remove'))
        {
          console.log(target.closest('.todo-remove'));
            let k = target.closest('.todo-item');  
                this.deleteItem (k);
        } else 
        
        if (target.closest('.todo-complete'))
        {
            let k = target.closest('.todo-item'); 
                this.completedItem(k);
        }               
       });
       this.render (); 
    }

        init (){
        this.form.addEventListener ('submit', this.addTodo.bind(this));
        this.render();
        this.handler();

    }
}
const todo = new Todo('.todo-control', '.header-input','.todo-list','.todo-completed');
        todo.init();
