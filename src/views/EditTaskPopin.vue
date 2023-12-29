<script setup lang="ts">


defineProps<{
    visible: boolean;
    title: string;
    description: string;
}>();

const emit = defineEmits<{
  (e: "saveChanges"): void;
  (e: "closePopin"): void;
}>();

function saveChanges() {
    emit("saveChanges");
}

function closePopin() {
    emit("closePopin");
}
</script>

<template>
    <!-- Modal -->
    <div v-if="visible" class="modal fade show" tabindex="-1"  aria-modal="true" role="dialog" style="display:block">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Edit Task</h5>
                <button type="button" class="btn-close" @click="closePopin()"></button>
            </div>
            <div class="modal-body">
                <slot name="actions"></slot>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-dark" data-bs-dismiss="modal" @click="closePopin()">Close</button>
                <button type="button" class="btn btn-dark" @click="saveChanges()"
                :class="{'disabled': !title || !description }"
                >
                Save changes
                </button>
            </div>
            </div>
        </div>
    </div>
</template>