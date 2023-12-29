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

    title.value = "";
    description.value = "";
}

const remainingTask = computed(() => {
    return taskStore.tasks.filter((t) => {
        return t.isCompleted === false;
    }).length;
});

function disabledAddButton() {
    let alphaRegex = new RegExp(/^[A-Za-z]+$/);
    let alphaNumericRegex = new RegExp(/^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]+$/);
    let numericRegex = new RegExp(/^[0-9]*$/);

    if (!title.value || !description.value) {
        return true;
    } 
    else if (alphaNumericRegex.test(title.value) && alphaNumericRegex.test(description.value)) {
        return false;
    }
    else if (numericRegex.test(title.value) || numericRegex.test(description.value)) {
        return true;
    }
    else if (alphaRegex.test(title.value) || alphaRegex.test(description.value)) {
        return false;
    }
    else {
        return true;
    }
}
</script>

<template>
    <div class="w-50 position-absolute top-50 start-50 translate-middle">
        <h3 class="mt-3 mb-3 text-center">TO DO LIST</h3>
        <div class="input-group input-group-sm mb-3 p-2">
            <span class="input-group-text">Remaining Items:</span>
            <span class="input-group-text">{{ remainingTask }}</span>
        </div>
        <div class="d-flex flex-column mb-3">
            <div class="input-group input-group-sm mb-3 p-2">
                <span class="input-group-text">Title</span>
                <input v-model="title" type="text" class="form-control" placeholder="Enter title">
            </div>
            <div class="input-group input-group-sm mb-3 p-2">
                <span class="input-group-text">Description</span>
                <input v-model="description" type="text" class="form-control" placeholder="Enter description">
            </div>
            <div class="p-2">
                <button type="button" class="btn btn-dark" @click="AddNewTask()"
                :class="{'disabled': disabledAddButton() }"
                >
                Add
                </button>
            </div>
        </div>
        
        <div class="d-flex flex-column p-2">
            <TaskList :tasks="taskStore.tasks"/>
        </div>
    </div>    
</template>

<style scoped></style>