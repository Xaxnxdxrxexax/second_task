<template>
  <div class="home">
    <div v-if="store.isLoading">Loading...</div>
    <div v-else class="wrapper">
      <Product
        v-for="product in store.products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script setup>
const store = useProductsStore();
onMounted(() => store.getProducts());
</script>

<style lang="scss" scoped>
.home {
  padding-block: 2rem;
}
.wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  align-items: baseline;
}
</style>
