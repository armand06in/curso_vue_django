<template>
    <div v-if = "element != Object" class="max-w-lg">
        <h1 class="text-4x1">
            {{ element.title }}
        </h1>
        <p class="text-sm">{{ element.price }}$ <span class="float-right">{{ element.category.title }}/{{ element.type.title }}</span></p>
        <p>{{ element.description }}</p>
        <hr>
    </div>
</template>

<script>
export default {
    data() {
        return {
            element: Object
        }
    },
    mounted() {
        this.$axios.get("http://localhost:8000/api/element/url/?url_clean=" + this.$route.params.slug + "&format=json").then((res) => {
           this.element = res.data; 
        });
    },
}
</script>

<style>
    
</style>