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
        },
        completeTask(id: string, isComplete: boolean) {
            const index = this.tasks.findIndex((t) => t.id == id);

            if (index >= 0 || index !== undefined) {
                console.log("change: " + this.tasks[index].isCompleted);
                this.tasks[index].isCompleted = !isComplete;
            }
        }
    },
});