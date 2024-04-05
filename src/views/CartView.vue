<script setup>
  import CartProductCard from '@/components/CartProductCard.vue';
  import cartService from '@/js/services/cartService';
  import productsService from '@/js/services/productsService';
  import {computed, onMounted, ref } from 'vue';
  
  // {
  //    [prodId]: ammount,
  //    ...
  // }
  const cart = ref(cartService.getCart())
  const products = ref([])

  onMounted(async() => {
    const response = await productsService.getAll();
    products.value = response.products
  })

  const emptyCart = computed(() => !Object.keys(cart.value).length)

  const prodArray = computed(() =>
    products.value.filter(p => cart.value[p.id])
    .map(p => ({
      ...p,
      cartAmmount: cart.value[p.id],
      subtotal: parseFloat(p.price) * cart.value[p.id]
    }))
  )

  const total = computed(() =>
    prodArray.value.reduce((accumulator, p) => accumulator + p.subtotal,
      0,
    )
  )
</script>

<template>
  <div class="cart">
    <h1 class="cart__title">cart</h1>
    
    <span v-if="emptyCart">sin productos en el carrito</span>
    <span v-else-if="!prodArray.length">cargando...</span>
    <CartProductCard v-for="product in prodArray" :key="product.id"
        :ammount="product.cartAmmount"
        :product="product"
    />

    <template v-if="!emptyCart">
      <span>total: ${{ total.toFixed(2) }}</span>
      <button
        class="cart__buyBtn"
        @click="cartService.buyCart"
      >
        comprar
      </button>
    </template>
  </div>
</template>

<style scoped>
  .cart {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .cart__title {
    margin-bottom: 16px;
  }
  .cart__buyBtn {
    display: block;
    justify-self: center;
    background-color: #2cba52;
    color: #ffffff;
    font-size: 100%;
    padding: 16px 16px;
    margin-top: 12px;
    align-self: center;
  }
</style>
