<template>
    <div @click="$router.push({ name: 'entry', params: { id: 10}})" class="entry-container mb-3 pointer p-2">

        <!-- Entry title -->
        <div class="entry-title d-flex">
            <span class="text-success fs-5 fw-bold">15</span>
            <span class="mx-1 fs-5">July</span>
            <span class="mx-2 fw-light">2021, thursday</span>
        </div>

        <div class="entry-description">
            Pariatur mollit cillum laboris duis aliquip nisi anim incididunt aliqua. Irure enim velit proident quis ea sunt in do quis id. Aute officia sit est duis voluptate minim.
        </div>

    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.entry-container {
    border-bottom: 1px solid #2c3e50;
    transition: 0.2s all ease-in-out;

    &:hover {
        background-color: lighten($color: grey, $amount: 45);
        transition: 0.2s all ease-in-out;
    }

    .entry-description {
        font-size: 12px;
    }

}

</style>