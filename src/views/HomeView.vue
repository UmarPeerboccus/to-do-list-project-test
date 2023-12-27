<script setup lang="ts">
import { ref, computed} from 'vue';
import {useTaskStore} from "../stores/Tasks";
import {v4 as uuidv4} from 'uuid';
import  TaskModel from "../model/TaskModel";
import TaskList from "./TaskList.vue";

const title = ref();
const description = ref();
const taskStore = useTaskStore();

function AddNewTask()
{
    taskStore.addTask(new TaskModel(
        uuidv4(),
        title.value,
        description.value,
        false
    ));
}

const remainingTask = computed(() => {
    return taskStore.tasks.filter((t) => {
        return t.isCompleted === false;
    }).length;
});
</script>

<template>
    <div class="row">
        <div class="col">
            <div class="mb-3">
                <label class="form-label">Title</label>
                <input v-model="title" type="text" class="form-control" placeholder="Title">
            </div>
            <div class="mb-3">
                <label class="form-label">Description</label>
                <input v-model="description" type="text" class="form-control" placeholder="Description">
            </div>
            <div class="mb-3">
                <button type="button" class="btn btn-outline-primary" @click="AddNewTask()">Add</button>
            </div>
        </div>
        <div class="col">
            <div class="mb-3">
                <label class="form-label">Remaining Items: {{ remainingTask }}</label>
            </div>
        </div>
        <div class="row">
            <TaskList :tasks="taskStore.tasks"/>
        </div>
    </div>
</template>

<style scoped></style>