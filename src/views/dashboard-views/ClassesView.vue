<template>
    <div id="classes-view">
        <div class="view-header">
            <div>Classes</div>
            <VButton>New Class</VButton>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    import VButton from '@/components/shared/VButton.vue';

    export default defineComponent({
        name: 'ClassesView',
        components: {
            VButton,
        }
    })
</script>