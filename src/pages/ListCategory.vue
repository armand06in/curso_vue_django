<template lang="">
    <div>
        <n-button type="primary" class = "btn-rl">
            <router-link :to="{ name: 'list-type'}">Tipos</router-link>
        </n-button>

        <n-table :bordered = "true" :single-line = "false" class = "my-table">
            <thead>
                <tr>
                    <th>Título</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for = "c in categories" :key = "c.id">
                    <td>{{ c.title }}</td>
                    <td>
                        <n-button type="primary" class = "btn-rl">
                            <router-link :to="{ name: 'list-element', params: { type: 'c', id: c.id } }">Elementos</router-link>
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
        this.$axios.get('http://localhost:8000/api/category/?format=json').then((res) => {
            this.categories = res.data.results
        })
    }, 
    data() {
        return {
            categories: []
        }
    },
}
</script>
<style lang="">
    
</style>