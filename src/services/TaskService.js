import { storageService } from "./generalService/asyncStorageService"

export const TaskService = {
    query,
    addTask,
    removeTask,
    updateTask,
    getById
}

function query(filter = '') {
    let tasks = storageService.query('tasks');
    return tasks
    // return new Promise((resolve, reject) => {
    //     // Perform some asynchronous operation here, such as fetching data from an API or database
    //     // When the operation is complete, call resolve() with the data as an argument
    //     let tasks = storageService.query('tasks');
    //     resolve(tasks);
        
    //     // If an error occurs during the operation, call reject() with the error as an argument
    //     // reject(new Error('Failed to fetch data'));
    //   });
}

function addTask(task) {
    storageService.post('tasks', task);
}

function removeTask(idTask) {
    storageService.remove('tasks', idTask);
}

function updateTask(task) {
    storageService.put('tasks', task);
}

function getById(idTask) {
    storageService.getById('tasks', idTask)
}

