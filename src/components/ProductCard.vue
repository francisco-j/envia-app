<script setup>
  const props = defineProps({
    product: Object
  })
</script>

<template>
  <router-link
    :to="`/product/${product.id}`"
    custom
    v-slot="{navigate}"
  >
    <div class="productCard" @click="navigate" @keypress.enter="navigate" role="link">
      <img class="productCard__img"
        :alt="product.name" :src="product.imageUrl"
      />

      <div class="productCard__textContainer">
        <span class="productCard__title">{{ product.name }}</span>
        <span class="productCard__sku">SKU: {{product.sku}}</span>
        <span>${{product.price}}</span>
      </div>
    </div>
  </router-link>
</template>

<style scoped>
  .productCard {
    display: flex;
    flex-direction: row;
    gap: 32px;
    padding: 16px;
    border-radius: 8px;
    border: solid 2px rgb(51, 199, 73);
    cursor: pointer;
  }

  .productCard__img {
    max-width: 100px;
    max-height: 100px;
    object-fit: contain;
  }

  .productCard__textContainer {
    display: flex;
    flex-direction: column;
    align-items: start;
  }

  .productCard__title {
    font-size: 2em;
    font-weight: bold;
  }

  .productCard__sku {
    font-weight: bold;
    color: rgb(127, 127, 127);
    font-size: 12px;
    margin-bottom: 8px;
  }
</style>
