<template>
    <div id="characters-view">
        <div class="view-header">
            <div>Characters</div>
            <VButton>New Character</VButton>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    import VButton from '@/components/shared/VButton.vue';

    export default defineComponent({
        name: 'CharactersView',
        components: {
            VButton,
        }
    })
</script>