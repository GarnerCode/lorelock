<template>
    <button @click="$emit('click')" class="button">
        <slot>Button</slot>
    </button>
</template>

<style lang="scss">
    .button {
        background-color: var(--color-navy-4);
        border: none;
        font-size: 16px;
        padding: 5px 20px;
        transition: var(--transition);
        display: block;
        cursor: pointer;
        border-radius: 5px;
        &:hover {
            background-color: var(--color-pink-1);
        }
    }
</style>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'VButton',
    })
</script>