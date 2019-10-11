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
import { test } from '~/api'
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
      let url =
        'https://www.easy-mock.com/mock/5d6ba32fdcdabb3a15a55996/miao/hotmovie'
      test(url).then(data => {
        console.log(data)
      })
    },
    clickMe() {
      this.$axios
        .get(
          'https://www.easy-mock.com/mock/5d6ba32fdcdabb3a15a55996/miao/hotmovie'
        )
        .then(data => {
          console.log(data)
        })
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
