const tasks ={
    tasks: [{
        text:'grocery shippin',
        completed: true
    },{
        text:'clean',
        completed: false
    },{
        text:'node js trainin',
        completed: false
    }],
    getTasksToDo(){
        console.log('Todo: ')
        var todo = this.tasks.filter((task)=> !task.completed)
        todo.forEach((task) => {
            console.log(`${task.text} is not complete`)
        })
    }
}

tasks.getTasksToDo()