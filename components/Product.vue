<template>
  <div class="product">
    <NuxtLink :to="`${product.category}/${product.id}`">
      <div class="image-wrapper">
        <img :src="product.image" :alt="product.description" />
        <div class="product-info">
          <h2>{{ product.title }}</h2>
          <p>{{ product.price }}$</p>
        </div>
      </div>
    </NuxtLink>
    <div class="buttons">
      <button @click="store.deleteProduct(product.id)" class="delete">
        delete
      </button>
      <button v-if="isInCart(product.id)" @click="store.addToCart(product)">
        Add to Cart
      </button>
      <button v-else @click="store.removeFromCart(product.id)" class="remove">
        Remove from Cart
      </button>
    </div>
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
  border-radius: 15px;
}

.image-wrapper {
  position: relative;
  cursor: pointer;

  img {
    height: 180px;
    object-fit: contain;
  }

  &:hover {
    .product-info {
      z-index: 1;
    }
  }

  &:hover::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.7) 90%);
    border-radius: 15px;
  }

  .product-info {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 1rem;
    color: white;
    font-size: 1rem;
    font-weight: 700;
    z-index: -1;
  }
}

h2 {
  font-size: 1rem;
  font-weight: 700;
}
.buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 1rem;
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
</style>
