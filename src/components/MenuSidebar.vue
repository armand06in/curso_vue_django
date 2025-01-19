<template lang="">
    <div>
        <n-menu :options = "options"></n-menu>
    </div>
</template>

<script>
import { h } from "vue";
import { RouterLink } from "vue-router"

export default {
  name: 'App', 
  data() {
    return {
      options: [
        {
          label: () => 
            h(RouterLink, {
              to: {
                name: "list-element"
              }
            }, 
            { default: () => "Elementos" }, 
            ), 
          key: 'list ele'
        }
      ]
    }
  },
  mounted(){
    this.categories();
    this.types();
  }, 
  methods: {
    categories() {
        this.$axios.get('http://localhost:8000/api/category/?format=json').then((res) => {
            const optionCate = [
              {
                label: () => 
                  h(RouterLink, {
                    to: {
                      name: "list-category"
                    }
                  }, 
                  { default: () => "Listado" }, 
                  ), 
                key: 'list cate'
              }
            ];
            res.data.results.forEach( c => {
              optionCate.push({
                label: c.title, 
                key: "c_" + c.id
              });
            });

            this.categories = res.data.results
            this.options.push(
              {
                label: 'Categorías', 
                key: '1 parent', 
                children: optionCate
              }        
            );
        })
    },
    types() {
        this.$axios.get('http://localhost:8000/api/type/?format=json').then((res) => {
            const optionType = [
              {
                label: () => 
                  h(RouterLink, {
                    to: {
                      name: "list-type"
                    }
                  }, 
                  { default: () => "Listado" }, 
                  ), 
                key: 'list type'
              }
            ];
            res.data.results.forEach( t => {
              optionType.push({
                label: t.title, 
                key: "t_" + t.id
              });
            });

            this.type = res.data.results
            this.options.push(
              {
                label: 'Tipos', 
                key: '2 parent', 
                children: optionType
              }        
            );
        })
    },     
  },
};
</script>

<style lang="">
    
</style>