<template>
  <div class="product">
    <p>{{ product.title }}</p>
    <div class="image">
      <NuxtLink :to="`${product.category}/${product.id}`">
        <img :src="product.image" :alt="product.description" />
      </NuxtLink>
    </div>
    <button @click="store.deleteProduct(product.id)">delete</button>
    <button v-if="isInCart(product.id)" @click="store.addToCart(product)">
      Add to Cart
    </button>
    <button v-else @click="store.removeFromCart(product.id)">
      Remove to Cart
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});
const store = useProductsStore();
const isInCart = (id) => !store.cart.find((item) => item.id === id);
</script>

<style lang="scss" scoped>
.product {
  outline: 1px solid black;
}

.image {
  width: 100px;
}
</style>
