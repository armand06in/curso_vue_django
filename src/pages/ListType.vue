<template lang="">
    <div>
        <h1>Listado Tipos</h1>
        <n-button type="primary" class = "btn-rl">
            <router-link :to="{ name: 'list-category'}">Categorías</router-link>
        </n-button>

        <n-table :bordered = "true" :single-line = "false" class = "my-table">
            <thead>
                <tr>
                    <th>Título</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for = "t in tipes" :key = "t.id">
                    <td>{{ t.title }}</td>
                    <td>
                        <n-button type="primary" class = "btn-rl">
                            <router-link :to="{ name: 'list-element', params: { type: 't', id: t.id } }">Elementos</router-link>
                        </n-button>
                    </td>
                </tr>
            </tbody>
        </n-table>
    </div>
</template>
<script>
export default {
    mounted() {
        this.$axios.get('http://localhost:8000/api/type/?format=json').then((res) => {
            this.tipes = res.data.results
        })
    }, 
    data() {
        return {
            tipes: []
        }
    },
}
</script>
<style lang="">
    
</style>