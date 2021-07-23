<template>
  <li :class="todo.status" @click="clicked(todo.id)">{{ todo.title }}</li>
</template>
<script>
export default {
  props: ['todo'],
  methods: {
    clicked(id) {
      this.$emit('on-toggle', id);
    }
  }
}
</script>
<style>
.close {
  text-decoration-line: line-through;
}

li {
  cursor: pointer;
}
</style>
