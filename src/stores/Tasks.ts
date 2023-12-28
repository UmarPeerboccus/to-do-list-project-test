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
            const index = this.tasks.findIndex((t) => t.id === id);

            if (index !== -1) {
                this.tasks[index].isCompleted = !isComplete;
            }
        },
        updateTask(id: string, title: string, description: string) {
            const index = this.tasks.findIndex((t) => t.id === id);
            if (index !== -1) {
                this.tasks[index].title = title;
                this.tasks[index].description = description;
            }
        }
    },
});