<template lang="">
    <div>
        <h1>Listado</h1>
    </div>
</template>
<script>
export default {
    mounted() {
        this.$axios.get('http://localhost:8000/api/category/?format=json').then((res) => {
            console.log(res.data)
        })
    },
}
</script>
<style lang="">
    
</style>