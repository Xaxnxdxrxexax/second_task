<template>
  <div>
    <h2>cathegory and id</h2>
    <NuxtLink :to="`/${params.cathegory}`"
      >Cathegory: {{ params.cathegory }}</NuxtLink
    >
    <p>ID: {{ params.id }}</p>
    <div>
      <img :src="product.image" :alt="product.description" />
    </div>
  </div>
</template>

<script setup>
const { params } = useRoute();

const { data: product, pending: loading } = await useFetch(
  `https://fakestoreapi.com/products/${params.id}`
);

if (!product.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Product not found",
    fatal: true,
  });
}
useHead({
  title: `GlassPaper - ${params.cathegory} - ${product.value.title}`,
});
</script>

<style lang="scss" scoped></style>
