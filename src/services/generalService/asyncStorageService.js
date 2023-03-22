
export const storageService = {
    query,
    getById,
    post,
    put,
    remove,
    getEntity,
    deleteStorage,
    deleteEntity,
    newEntity
}

function getEntity(entityType) {
    const entities = JSON.parse(localStorage.getItem(entityType));
    return entities
}

function deleteEntity(entityType) {
    return localStorage.removeItem()
}

function deleteStorage() {
    localStorage.clear()
}

function newEntity(entityType, entityData) {
    _save(entityType, entityData)
}

function _save(entityType, entities) {
    localStorage.setItem(entityType, JSON.stringify(entities))
}

function query(entityType) {
    var entities = this.getEntity(entityType);
    return Promise.resolve(entities);
}

function getById(entityType, entityId) {
    return query(entityType).then(entities => entities.find(entity => entity._id === entityId))
}
function post(entityType, newEntity) {
    newEntity._id = _makeId();
    query(entityType).then(entities => {
        entities.push(newEntity);
        _save(entityType, entities)
    })
}
function put(entityType, updateEntity) {
    query(entityType).then(entities => {
        const indexId = entities.findIndex(entity => entity._id === updateEntity._id)
        entities.splice(indexId, 1, updateEntity);      //array.splice(index, howmany, item1, ....., itemX)
        console.log('update entity', updateEntity);
        _save(entityType, updateEntity)
    })
}

function remove(entityType, entityId) {
    return query(entityType).then(entities => {
        const indexId = entities.findIndex(entity => entity._id === entityId);
        entities.splice(indexId, 1)
        _save(entityType, entities);
        console.log('remove entity');
    })

}
function _makeId(length = 5) {
    var text = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return text
}