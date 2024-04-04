<script setup>
  import ProductCard from '@/components/ProductCard.vue'
  import productsService from '@/js/services/productsService';
  import { ref, onMounted } from 'vue'

  defineProps({
    msg: String
  })

  const products = ref(undefined) // is an array

  onMounted(async() => {
    const response = await productsService.getAll();
    products.value = response.products
  })
</script>

<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <ProductCard msg="Welcome to Your Vue.js App"/>
  </div>
</template>