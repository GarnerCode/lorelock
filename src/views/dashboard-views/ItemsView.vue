<template>
    <div id="items-view">
        <div class="view-header">
            <div>Items</div>
            <VButton>New Item</VButton>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    import VButton from '@/components/shared/VButton.vue';

    export default defineComponent({
        name: 'ItemsView',
        components: {
            VButton,
        }
    })
</script>