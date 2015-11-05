"use strict";  

Template.todos.helpers({
        todoList: function () {
            return Collections.Todo.find({});
        }
});