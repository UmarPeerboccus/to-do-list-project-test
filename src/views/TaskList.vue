<script setup lang="ts">
import  TaskModel from "../model/TaskModel";

const props =  defineProps<{
  tasks: TaskModel[];
}>();
</script>

<template>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">Task</th>
      <th scope="col">Description</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="task in props.tasks" :key="task.title">
      <th scope="row">{{ task.title }}</th>
      <td>{{ task.description }}</td>
      <button type="button" class="btn btn-outline-primary">Edit</button>
      <button type="button" class="btn btn-outline-primary">Complete</button>
      <button type="button" class="btn btn-outline-primary">Delete</button>
    </tr>
  </tbody>
</table>
</template>

<style scoped></style>