import moment from 'moment'
import _ from 'lodash'
moment.locale('zh-CN')

const entities = (state) => {
  return state.entities
}

const updated = (state) => {
  return (entity) => {
    return moment(entity.meta.updated).fromNow()
  }
}

const words = (state) => {
  return (entity) => {
    return entity.body.length
  }
}

const header = (state) => {
  return (entity) => {
    return _.truncate(entity.body,{length:30})
  }
}

export {
  entities,
  updated,
  words,
  header
}