<template>
    
    <div class="entry-list-container">
        <div class="px-2 pt-2">
            <input type="text" class="form-control" placeholder="Search entries">
        </div>
    </div>

    <div class="entry-scrollarea">
        <Entry v-for="item in 100" v-bind:key="item"/>
    </div>

</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
    components: {
        Entry: defineAsyncComponent( () => import("./Entry.vue") )
    }
}
</script>

<style lang="scss" scoped>

.entry-list-container {
    border-right: 1px solid #2c3e50;
    // height: calc(100vh - 56px);
}

.entry-scrollarea {
    height: calc( 100vh - 15px );
    overflow: scroll;
}

</style>