"use string";

Template.form.events({
    'submit .add-new-task': function (event) {
        event.preventDefault();
        
        var taskName = event.currentTarget.children[0].firstElementChild.value;
Collections.Todo.insert({
    name: taskName,
    createdAt: new Date(),
    complete: false
});       
        event.currentTarget.children[0].firstElementChild.value = ""
        return false;
    }
});

Template.todos.events({
   'click .delete-task': function (event) {
       Collections.Todo.remove({_id: this._id});   
   },
    
    'click .complete-task': function (event) {
        Collections.Todo.update({_id: this._id}, {$set: {complete: true}});
    },
    
    'click .incomplete-task': function (event) {
         Collections.Todo.update({_id: this._id}, {$set: {complete: false}});
    }
});