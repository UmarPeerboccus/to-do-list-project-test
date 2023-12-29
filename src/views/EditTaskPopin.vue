<script setup lang="ts">


const props = defineProps<{
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

function disabledSaveChangesButton() {
    let alphaRegex = new RegExp(/^[A-Za-z]+$/);
    let alphaNumericRegex = new RegExp(/^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]+$/);
    let numericRegex = new RegExp(/^[0-9]*$/);

    if (!props.title || !props.description) {
        return true;
    } 
    else if (alphaNumericRegex.test(props.title) && alphaNumericRegex.test(props.description)) {
        return false;
    }
    else if (numericRegex.test(props.title) || numericRegex.test(props.description)) {
        return true;
    }
    else if (alphaRegex.test(props.title) || alphaRegex.test(props.description)) {
        return false;
    }
    else {
        return true;
    }
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
                :class="{'disabled': disabledSaveChangesButton() }"
                >
                Save changes
                </button>
            </div>
            </div>
        </div>
    </div>
</template>