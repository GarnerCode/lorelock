<template>
    <div id="sessions-view">
        <div class="view-header">
            <div>Sessions</div>
            <Button>New Session</Button>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    import Button from '@/components/shared/Button.vue';

    export default defineComponent({
        name: 'SessionsView',
        components: {
            Button,
        }
    })
</script>