<script setup>
  import productsService from '@/js/services/productsService';
  import cartService from '@/js/services/cartService';
  import { ref, onMounted } from 'vue'
  import { useRoute } from 'vue-router'
  const route = useRoute()

  const product = ref(null)
  const cart = cartService.getCart();

  onMounted(async() => {
    const response = await productsService.getById(route.params.id);
    product.value = response.product
  })

  const addToCart = () => {
    cartService.addToCart(product.value.id)
  }
</script>

<template>
  <div v-if="!product" class="about">
    loading
  </div>
  <div v-else class="about">
    <h1>{{ product.name }}</h1>
    <span v-if="product.subname">{{ product.subname }}</span>

    <div v-if="product" class="about__container">
      <img class="about__img"
        :alt="product.name" :src="product.imageUrl"
      />
      
      <div class="about__textContainer">
        <div>
          <button
          class="about__addBtn"
          @click="addToCart"
          >
            agregar al carrito
          </button>

          <span v-if="cart[product.id]">
            en carrito: {{cart[product.id]}}
          </span>
        </div>

        <span v-if="product.description">
          {{ product.description }}
        </span>
        <span>sku: {{ product.sku }}</span>
        <span>${{ product.price }}
          <span v-if="product.discount">descuento!!</span>
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .about__container {
    display: flex;
    flex-direction: row;
    gap: 32px;
    margin: 32px 0;
  }
  .about__addBtn {
    background-color: #2c62ba;
    color: #ffffff;
    font-size: 100%;
    padding: 16px 16px;
    margin-bottom: 12px;
  }
  .about__addBtn:hover {
    background-color: #2656a3;
  }

  .about__img {
    width: 400px;
    max-height: 400px;
    object-fit: contain;
  }

  .about__textContainer {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 8px;
    align-items: start;
  }
</style>