import {Tasks} from './../../data/dummyData'

import {storageService} from './asyncStorageService'

export const dataService={
    initData,
    removeData
}

function initData(){
    storageService.newEntity('tasks',Tasks)
}

function removeData(){
    storageService.deleteStorage();
}