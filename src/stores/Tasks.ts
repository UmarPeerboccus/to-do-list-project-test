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
        deleteTask(id: string) {
           this.tasks = this.tasks.filter((t) => {
                return t.id !== id;
           });
        }
    },
});