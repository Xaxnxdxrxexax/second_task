<template>
  <div class="cart-wrapper">
    <h2>Cart</h2>
    <p v-if="store.cart.length === 0">No products in the cart :(</p>
    <ul v-else>
      <li v-for="item in store.cart" :key="item.id">
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
      <li class="total">{{ store.cartTotal }}$</li>
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
}
.cart-wrapper {
  display: flex;
  position: relative;
  height: 100%;
  width: 100%;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
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
</style>
