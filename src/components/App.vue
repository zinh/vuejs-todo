<template>
  <div>
    <input @keyup.enter="addTodo" placeholder="new todo, press enter to add"/>
    <button @click="view = 'all'">All</button>
    <button @click="view = 'open'" >Open</button>
    <button @click="view = 'close'">Closed</button>
    <ul>
      <todo-item v-for="todo of todos" :key="todo.id" :todo="todo" @on-toggle="handleToggle"/>
    </ul>
  </div>
</template>
<script>
import TodoItem from './todo-item.vue'
export default {
  data(){
    return {
      view: 'all'
    }
  },
  computed: {
    todos() {
      switch(this.view) {
        case 'all':
          return this.$store.state.todos
        case 'open':
          return this.$store.state.todos.filter(todo => todo.status === 'open');
        case 'close':
          return this.$store.state.todos.filter(todo => todo.status === 'close');
      }
    }
  },
  components: {
    TodoItem
  },
  methods: {
    addTodo(evt){
      const title = evt.currentTarget.value;
      this.$store.commit('add', title);
      evt.currentTarget.value = "";
    },
    handleToggle(todoId){
      this.$store.commit('toggle', todoId);
    }
  }
};
</script>
