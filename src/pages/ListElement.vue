<template lang="">
    <div>
        <n-button type="primary" class = "btn-rl">
            <router-link :to="{ name: 'list-type'}">Tipos</router-link>
        </n-button>

        <n-table :bordered = "true" :single-line = "false" class = "my-table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Titulo</th>
                    <!--
                    <th>Precio</th>
                    <th>Fecha</th>-->
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for = "e in elements" :key = "e.id">
                    <td>{{ e.id }}</td>
                    <td>{{ e.title }}</td>
                    <!--<td>{{ e.price }}</td>
                    <td>{{ e.created }}</td>-->
                    <td>
                        <n-button type="primary" class = "btn-rl">
                            <router-link :to="{ name: 'detail-element', params: { slug: e.url_clean } }">Ver</router-link>
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
        let url = 'http://localhost:8000/api/element/?format=json';

        if(this.$route.params.type == 'c')
            url = 'http://localhost:8000/api/category/' + this.$route.params.id + '/elements/?format=json';

        else if(this.$route.params.type == 't')
            url = 'http://localhost:8000/api/type/' + this.$route.params.id + '/elements/?format=json';

        this.$axios.get(url).then((res) => {
            this.elements = res.data.results ? res.data.results : res.data;
        })
    }, 
    data() {
        return {
            elements: []
        }
    },
}
</script>
<style lang="">
    
</style>