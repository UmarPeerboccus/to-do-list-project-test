<script setup lang="ts">
import { ref } from "vue";
import  TaskModel from "../model/TaskModel";
import {useTaskStore} from "../stores/Tasks";
import EditTaskPopin from "./EditTaskPopin.vue";

const props =  defineProps<{
  tasks: TaskModel[];
}>();
const isVisible = ref(false);
const idToModify = ref();
const title = ref();
const description = ref();
const taskStore = useTaskStore();

function DeleteTask(id: string) {
  taskStore.deleteTask(id);
}

function CompleteTask(id: string, isCompleted: boolean) {
  taskStore.completeTask(id, isCompleted);
}

function openEditTaskPopin(id: string) {
  isVisible.value = true;
  idToModify.value = id;
}

function closeEditTaskPopin() {
  isVisible.value = false;
}

function saveEditTaskPopin() {
  taskStore.updateTask(idToModify.value, title.value, description.value);
  isVisible.value = false;
}
</script>

<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Title</th>
        <th scope="col">Description</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="task in props.tasks" :key="task.title">
        <td>{{ task.title }}</td>
        <td>{{ task.description }}</td>
        <div class="btn-group" role="group">
          <button type="button" class="btn btn-secondary" data-bs-toggle="button" @click="CompleteTask(task.id, task.isCompleted)">Complete</button>
          <button type="button" class="btn btn-secondary" @click="openEditTaskPopin(task.id)"
          :class="{'disabled': task.isCompleted }"
          >
          Edit
          </button>
          <button type="button" class="btn btn-secondary" @click="DeleteTask(task.id)">Delete</button>
        </div>
      </tr>
    </tbody>
  </table>
  <EditTaskPopin 
  :visible="isVisible"
  :title="title"
  :description="description"
  @closePopin="closeEditTaskPopin"
  @saveChanges="saveEditTaskPopin"
  >
    <template #actions>
      <div class="mb-3">
          <label class="form-label">Title</label>
          <input v-model="title" type="text" class="form-control">
      </div>
      <div class="mb-3">
          <label class="form-label">Description</label>
          <input v-model="description" type="text" class="form-control">
      </div>
    </template>
  </EditTaskPopin>
</template>

<style scoped></style>