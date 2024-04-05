<script setup>
  import cartService from '@/js/services/cartService';
  import { ref } from 'vue';
  
  const cart = ref(cartService.getCart())
</script>

<template>
  <div class="about">
    <h1>This is cart page</h1>
    <pre>
      {{ cart }}
    </pre>
  </div>
</template>
