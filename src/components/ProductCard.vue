<script setup>
  const props = defineProps({
    product: Object
  })

  console.log({props: props});
  console.log(props.product);
</script>

<template>
  <div class="productCard">
    <img class="productCard__img"
      :alt="product.name" :src="product.imageUrl"
    />

    <div class="productCard__textContainer">
      <span class="productCard__title">{{ product.name }}</span>
      <span>SKU: {{product.sku}}</span>
      <span>${{product.price}}</span>
    </div>
  </div>
</template>

<style scoped>
  .productCard {
    display: flex;
    flex-direction: row;
    gap: 32px;
    padding: 16px;
    border-radius: 8px;
    border: solid 2px rgb(51, 199, 73); 
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
    margin-bottom: 8px;
  }
</style>
