import { computed } from 'vue'
import { useStore } from 'vuex'

const mapState = (name = '') => {
  const store = useStore()
  
  return Object.fromEntries(
    Object.keys(store.state[name]).map(
      key => [key, computed(() => store.state[name][key])],
    ),
  )
}

const mapGetters = (name = '') => {
  const store = useStore()
  
  return Object.fromEntries(
    Object.keys(store.getters[name]).map(
      getter => [getter, computed(() => store.getters[name][getter])],
    ),
  )
}

const mapMutations = (name = '') => {
  const store = useStore()
  
  return Object.fromEntries(
    Object.keys(store._mutations).map(mutation=>{
      return [mutation.replace(name+'/', ''), value => store.commit(mutation, value)]
    }),
  )
}

const mapActions = (name = '') => {
  const store = useStore()
  
  return Object.fromEntries(
    Object.keys(store._actions).map(
      action => [action.replace(name+'/', ''), value => store.dispatch(action, value)],
    ),
  )
}

export { mapState, mapGetters, mapMutations, mapActions }