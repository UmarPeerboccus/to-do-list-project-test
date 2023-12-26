import  TaskModel from "@/model/TaskModel";
import {defineStore} from "pinia";

export const useTaskStore = defineStore("taskSotre", {
    state: () => ({
        tasks: [] as TaskModel[],
    }),
    getters: {

    },
    actions: {
        addTask(newTask: TaskModel) {
            this.tasks.push(newTask);
        },
    },
});