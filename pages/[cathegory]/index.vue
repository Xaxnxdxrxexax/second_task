<template>
  <div>
    <h2>cathegory page</h2>
    <p>Cathegory: {{ params.cathegory }}</p>
    <div v-if="loading">Loading...</div>
    <div v-else class="wrapper">
      <Product
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script setup>
const { params } = useRoute();
useHead({
  title: `GlassPaper - ${params.cathegory}`,
});
const { data: products, pending: loading } = await useFetch(
  `https://fakestoreapi.com/products/category/${encodeURIComponent(
    params.cathegory
  )}`
);

if (products.value.length === 0) {
  throw createError({
    statusCode: 404,
    statusMessage: "Category not found",
    fatal: true,
  });
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
}
</style>
