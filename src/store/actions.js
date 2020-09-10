const initial = ({commit}) => {
  commit('setInitialData')
}

const create = ({commit}) => {
  commit('createEntity')
}

const update = ({commit},entity) => {
  commit('updateEntity',entity)
}

const destroy = ({commit},entity) => {
  commit('destroyEntity',entity)
}

export {
  initial,
  create,
  update,
  destroy,
}