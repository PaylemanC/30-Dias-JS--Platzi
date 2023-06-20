function createTaskPlanner() {
    let taskList = [];

    const addTask = (task) => {
        task.completed = false;
        taskList.push(task);
    }
    const removeTask = (value) => taskList.splice(taskList.findIndex((task) => task.id == value || task.name === value), 1); 
    const getTasks = () => taskList;
    const getPendingTasks = () => taskList.filter((task) => !task.completed);
    const getCompletedTasks = () =>  taskList.filter((task) => task.completed);    
    const markTaskAsCompleted = (value) => {
        const i = taskList.findIndex((task) => task.id == value || task.name === value);
        taskList[i].completed = true;
    }
    const getSortedTasksByPriority = () => [...taskList].sort((a, b) => a.priority - b.priority);
    const filterTasksByTag = (tag) => taskList.filter((task) => task.tags.includes(tag));      
    const updateTask = (taskId, updates) => {
        const i = taskList.findIndex((task) => task.id === taskId);
        taskList[i] = {...taskList[i], ...updates};
    }

    return { addTask, removeTask, getTasks, getPendingTasks, getCompletedTasks, markTaskAsCompleted, getSortedTasksByPriority, filterTasksByTag, updateTask}
}  

const planner = createTaskPlanner();

planner.addTask({
    id: 1,
    name: "Comprar leche",
    priority: 1,
    tags: ["shopping", "home"]
});

planner.addTask({
    id: 2,
    name: "Llamar a Juan",
    priority: 3,
    tags: ["personal"]
});

planner.markTaskAsCompleted("Llamar a Juan");


console.log(planner.getCompletedTasks());
/*[{
    id: 2,
    name: "Llamar a Juan",
    completed: true,
    priority: 3,
    tags: ["personal"]
}]*/

console.log(planner.filterTasksByTag("shopping"));
/*[{
    id: 1,
    name: "Comprar leche",
    completed: false,
    priority: 3,
    tags: ["shopping", "home"]
}]*/