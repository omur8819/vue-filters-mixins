<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h3>Filters and Mixins</h3>
        <p>{{ message | upperCase | lowerCase }}</p>
        <hr>
        <input type="text" v-model="searchText">
        <ul>
          <li v-for="product in filtered" v-bind:key="product"> {{ product }} </li>
        </ul>

        <app-list></app-list>

      </div>
    </div>
  </div>
</template>

<script>
import FilterList from './FilterList.vue';
import { productMixin } from './productMixin';
export default {
  mixins: [productMixin],
  components: {
    appList: FilterList,
  },
  data(){
    return{
      message: "Hi filters and mixins",
    }
  },
  filters: {
    upperCase(value){
      return value.toUpperCase();
    },
  },
}
</script>

<style>

</style>



