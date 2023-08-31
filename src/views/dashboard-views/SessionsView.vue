<template>
    <div id="sessions-view">
        <div class="view-header">
            <div>Sessions</div>
            <VButton>New Session</VButton>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    import VButton from '@/components/shared/VButton.vue';

    export default defineComponent({
        name: 'SessionsView',
        components: {
            VButton,
        }
    })
</script>