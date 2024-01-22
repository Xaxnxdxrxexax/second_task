<template>
  <div>
    <h1>pinia page</h1>
    <p>There are {{ store.prodLength }} items</p>
    <NewProductForm />
    <p v-if="store.isLoading">loading store</p>
    <ul v-else>
      <Product
        v-for="product in store.products"
        :key="product.id"
        :product="product"
      />
    </ul>
  </div>
</template>

<script setup>
const store = useProductsStore();
await store.getProducts();
</script>

<style lang="scss" scoped>
div {
  text-align: center;
}

ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
}
</style>
