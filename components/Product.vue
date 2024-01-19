<template>
  <div class="product">
    <p>{{ product.description }}</p>
    <div>
      <img :src="product.image" :alt="product.description" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  product: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.product {
  width: 200px;
  height: 200px;
  outline: 1px solid black;
}
</style>
