import Vuex from 'vuex';

const localStorage = (function(){
  const storage = window.localStorage;

  const get = () => {
    const todos = storage.getItem('todos');
    if (todos)
      return JSON.parse(todos);
    else
      return [];
  }

  const put = (todos) => {
    storage.setItem('todos', JSON.stringify(todos));
  }

  return { get, put };
})();

const store = new Vuex.Store({
  state: {
    todos: localStorage.get()
  },
  mutations: {
    add(state, title) {
      state.todos.push({
        id: state.todos.length,
        title,
        status: 'open'
      })
      localStorage.put(state.todos);
    },
    remove(state, id) {
      state.todos = state.todos.filter(todo => todo.id !== id)
      localStorage.put(state.todos);
    },
    toggle(state, id) {
      const todo = state.todos.find(t => t.id === id);
      if (todo) {
        todo.status = todo.status === 'open' ? 'close' : 'open';
        localStorage.put(state.todos);
      }
    }
  }
});

export default store;
