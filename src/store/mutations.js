import {db,loadCollection} from '../database'


export default {
  setInitialData(state){
    loadCollection('notes').then((collection) => {
      // collection.insert([
      //   {body:'hello~'},
      //   {body:'hola~'}
      // ])
      // db.saveDatabase()
      const _entities = collection.chain()
              .simplesort('$loki',true)
              .data();
              
      state.entities = _entities
      console.log(_entities)
    })
  
  },
  createEntity(state){
    loadCollection('notes')
    .then((collection) => {
      const entity = collection.insert({
        body:''
      })
      db.saveDatabase();
      state.entities.unshift(entity)
    })
  },
  updateEntity(state,entity){
    loadCollection('notes').then((collection) => {
      collection.update(entity)
      db.saveDatabase()
    })
  },
  destroyEntity(state,entity){
    const id = entity.$loki;
    const _entities = state.entities.filter((_entity) => {
      return _entity.$loki !== id
    })

    state.entities = _entities;

    loadCollection('notes').then((collection) => {
      collection.remove({'$loki':id})
      db.saveDatabase()
    })


  }

}