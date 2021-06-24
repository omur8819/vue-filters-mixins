<template>
  <div>
    <hr>
    <input type="text" v-model="searchText">
    <ul>
      <li v-for="product in filtered" v-bind:key="product"> {{ product }} </li>
    </ul>
  </div>
</template>

<script>
import { productMixin } from './productMixin';
export default {
  mixins: [productMixin]
}
</script>

<style>

</style>