<script setup>
  import ProductCard from '@/components/ProductCard.vue'
  import productsService from '@/js/services/productsService';
  import { ref, onMounted } from 'vue'

  const products = ref([])

  onMounted(async() => {
    const response = await productsService.getAll();
    products.value = response.products
  })
</script>

<template>
  <div class="home">
    <h1>Nuestros productos</h1>
    <div class="productsContainer">
      <span v-if="!products.length">
        cargando...
      </span>
      <ProductCard v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<style scoped>
  .productsContainer {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin: 32px auto 0;
  }
</style>