<template>
  <div v-if="loading">Loading...</div>
  <div v-else class="product-wrapper">
    <div>
      <img :src="product.image" :alt="product.description" />
    </div>
    <div class="product-info">
      <h2>{{ product.title }}</h2>
      <p class="price">{{ product.price }}$</p>
      <p class="description">{{ product.description }}</p>
      <div class="buttons">
        <button v-if="isInCart(product.id)" @click="store.addToCart(product)">
          Add to Cart
        </button>
        <button v-else @click="store.removeFromCart(product.id)" class="remove">
          Remove from Cart
        </button>
      </div>
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

const store = useProductsStore();
const isInCart = (id) => !store.cart.find((item) => item.id === id);
</script>

<style lang="scss" scoped>
.product-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  padding: 2rem;
}

.product-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

h2 {
  font-size: 1.5rem;
  font-weight: 800;
}

.price {
  font-size: 1.5rem;
  font-weight: 800;
  color: $easternBlue;
}

.description {
  font-size: 1.2rem;
}

.buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 0.5rem;
}
button {
  cursor: pointer;
  background-color: $turquoise;
  border: none;
  border-radius: 10px;
  color: white;
  padding: 0.5rem 1rem;
  font-weight: 700;
  font-size: 0.8rem;

  &:hover {
    background-color: $black;
  }
}

.delete {
  background-color: red;
  &:hover {
    background-color: darkred;
  }
}

.remove {
  background-color: $easternBlue;
}

img {
  mix-blend-mode: multiply;
}
</style>
