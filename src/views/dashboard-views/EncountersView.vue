<template>
    <div id="encounters-view">
        <div class="view-header">
            <div>Encounters</div>
            <VButton>New Encounter</VButton>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    import VButton from '@/components/shared/VButton.vue';

    export default defineComponent({
        name: 'EncountersView',
        components: {
            VButton,
        }
    })
</script>