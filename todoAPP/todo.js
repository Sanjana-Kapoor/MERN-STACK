

let tasks = [];
const taskList = document.getElementById('list');
const addTaskInput = document.getElementById('add');
const tasksCounter = document.getElementById('tasks-counter');

console.log('Working');

function addTasksToDOM(task){
    const li = document.createElement('li');
    li.innerHTML = `
    <input type="checkbox" id="${task.id}" ${task.done ? 'checked':''} class="custom-checkbox">
    <label for='${task.id}'>${task.text}</label>
    <img src="bin.webp" class="delete" data-id='${task.id}'  />
  `;

  taskList.append(li);


}

function renderList () {
    taskList.innerHTML = '';
    
    for(let i =0; i< tasks.length; i++){
        addTasksToDOM(tasks[i]);
    }

    tasksCounter.innerHTML = tasks.length;

}

function ToggleTask (taskId) {
    const task = tasks.filter(function(task){
        return task.id == taskId;
    });
    if(task.length > 0){
        const currentTask = task[0];

        currentTask.done = !currentTask.done;
        renderList();
        showNotification("Task toggled successfully");
        return;
    }
    showNotification('Could not toggle the task');
}

function deleteTask (taskId) {
    const newTasks = tasks.filter(function(task){
        return task.id != taskId;
    })

    tasks = newTasks;
    renderList();
    showNotification("Task deleted successfully");
}

function addTask (task) {
    if(task){
        tasks.push(task);
        renderList();
        showNotification('Task added successfully');
        return;
    }
    showNotification("Task cannot be added");
}

function showNotification(text) {
    alert(text);
}

function handleInputKeypress(e){
    if(e.key == 'Enter'){
        const text = e.target.value;
        console.log('text',text);
        if(!text){
            showNotification("Task cannot be empty !");
            return;
        }

        const task = {
            text,
            id:Date.now().toString(),
            done:false
        }

        e.target.value = " ";
        addTask(task);
    }

}

function handleClickListener(e){
    const target = e.target;
    //console.log(target);

    if(target.className == 'delete'){
        const taskId = target.dataset.id;
        deleteTask(taskId);
        return;
    }else if(target.className == 'custom-checkbox'){
        const taskId = target.id;
        ToggleTask(taskId);
        return;
    }


}

function initializeApp(){
    
addTaskInput.addEventListener('keyup',handleInputKeypress);
document.addEventListener('click',handleClickListener);

}

initializeApp();
