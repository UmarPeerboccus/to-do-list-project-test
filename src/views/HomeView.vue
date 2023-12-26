<script setup lang="ts">
import DisplayView from "./DisplayView.vue";
</script>

<template>
    <div class="row">
        <div class="col">
            <div class="mb-3">
                <label class="form-label">Title</label>
                <input type="text" class="form-control" placeholder="Title">
            </div>
            <div class="mb-3">
                <label class="form-label">Description</label>
                <input type="text" class="form-control" placeholder="Description">
            </div>
            <div class="mb-3">
                <button type="button" class="btn btn-outline-primary">Add</button>
            </div>
        </div>
        <div class="col">
            <div class="mb-3">
                <label class="form-label">Remaining Items</label>
                <input type="text" class="form-control" placeholder="Counter">
            </div>
        </div>
        <div class="row">
            <DisplayView/>
        </div>
    </div>
</template>

<style scoped></style>