<template>
  <div class="cart-wrapper">
    <h2>Cart</h2>
    <p v-if="store.cart.length === 0">No products in the cart :(</p>
    <ul v-else>
      <li v-for="item in store.cart" :key="item.id">
        <!-- TODO: is there a way to avoid this path check? -->
        <NuxtLink
          :to="
            !params.cathegory ? `/${item.category}/${item.id}` : `/${item.id}`
          "
        >
          <p class="title">
            {{ item.title }}
          </p>
        </NuxtLink>
        <p>{{ item.price }}$</p>
      </li>
      <hr />
      <li>
        <button @click="store.emptyCart">Empty Cart</button>
        <p class="total">{{ store.cartTotal }}$</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
const store = useProductsStore();
const { params } = useRoute();
</script>

<style lang="scss" scoped>
h2 {
  font-size: 1.5rem;
  font-weight: 800;
  color: $elephant;
}
.cart-wrapper {
  display: flex;
  position: relative;
  height: 100%;
  width: 100%;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  background-color: $turquoise;
  outline: 1px solid transparent;
}
ul {
  position: sticky;
  top: 15px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 1rem;
}
li {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.total {
  font-size: 1.5rem;
  font-weight: 800;
  align-self: flex-end;
  width: min-content;
}

hr {
  border-top: 1px solid $easternBlue;
  width: 100%;
}

.title {
  cursor: pointer;
}
a {
  text-decoration: none;
  color: $elephant;

  &:hover {
    text-decoration: underline;
  }
}

.router-link-exact-active {
  text-decoration: underline;
  color: $black;
}

button {
  background: none;
  border: 1px solid black;
  padding: 0.5rem;
  border-radius: 10px;
  cursor: pointer;
  color: $elephant;

  &:hover {
    background-color: black;
    color: white;
  }
}
</style>
