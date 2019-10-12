<template>
  <div>
    <li
      v-for="(todo,index) in todos"
      :key="index"
    >
      <input
        type="checkbox"
        :checked="todo.done"
        @change="toggle(todo)"
      >
      <span :class="{ done: todo.done }">{{ todo.text }}</span>
    </li>
    <el-input
      v-model="input"
      placeholder="What needs to be done?"
      @keyup.enter.native="addTodo"
    />
    <el-button @click="clickMe">测试</el-button>
    <el-button @click="getClickMe">get测试</el-button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { fetchArticle, fetchLinkList } from '~/api/index'
export default {
  computed: {
    todos() {
      return this.$store.state.todos.list
    }
  },
  data() {
    return {
      input: ''
    }
  },
  methods: {
    getClickMe() {
    },
    clickMe() {
      fetchLinkList(this.$axios.$request)
    },
    addTodo(e) {
      this.$store.commit('todos/add', this.input)
      e.target.value = ''
    },
    ...mapMutations({
      toggle: 'todos/toggle'
    })
  }
}
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>
