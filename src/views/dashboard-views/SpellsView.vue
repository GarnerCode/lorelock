<template>
    <div id="spells-view">
        <div class="view-header">
            <div>Spells</div>
            <VButton>New Spell</VButton>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    import VButton from '@/components/shared/VButton.vue';

    export default defineComponent({
        name: 'SpellsView',
        components: {
            VButton,
        }
    })
</script>