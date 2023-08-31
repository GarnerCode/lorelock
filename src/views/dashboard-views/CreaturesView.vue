<template>
    <div id="creatures-view">
        <div class="view-header">
            <div>Creatures</div>
            <VButton>New Creature</VButton>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    import VButton from '@/components/shared/VButton.vue';

    export default defineComponent({
        name: 'CreaturesView',
        components: {
            VButton,
        }
    })
</script>