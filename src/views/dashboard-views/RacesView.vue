<template>
    <div id="races-view">
        <div class="view-header">
            <div>Races</div>
            <VButton>New Race</VButton>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    import VButton from '@/components/shared/VButton.vue';

    export default defineComponent({
        name: 'RacesView',
        components: {
            VButton,
        }
    })
</script>