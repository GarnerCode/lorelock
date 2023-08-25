<template>
    <div id="characters-view">
        <div class="view-header">
            <div>Characters</div>
            <Button>New Character</Button>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    import Button from '@/components/shared/Button.vue';

    export default defineComponent({
        name: 'CharactersView',
        components: {
            Button,
        }
    })
</script>