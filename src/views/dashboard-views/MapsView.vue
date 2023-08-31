<template>
    <div id="maps-view">
        <div class="view-header">
            <div>Maps</div>
            <VButton>New Map</VButton>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    import VButton from '@/components/shared/VButton.vue';

    export default defineComponent({
        name: 'MapsView',
        components: {
            VButton,
        }
    })
</script>