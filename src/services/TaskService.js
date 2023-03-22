import storageService from "./generalService/asyncStorageService"

export const TaskService = {
    query,
    addTask,
    removeTask,
    updateTask,
    getById
}

function query(filter = '') {
    storageService.query('tasks')
}

function addTask(task) {
    storageService.post('tasks', task);
}

function removeTask(idTask) {
    storageService.remove('tasks',idTask);
}

function updateTask(task) {
    storageService.put('tasks',task);
}

function getById(idTask) {
    storageService.getById('tasks', idTask)
}

