<template>
  <div class="categories-wrapper">
    <h2>Categories:</h2>
    <nav>
      <li v-for="category in categories" :key="category">
        <NuxtLink :to="`/${category}`">{{ category }}</NuxtLink>
      </li>
    </nav>
  </div>
</template>

<script setup>
const { data: categories, pending: isLoading } = await useFetch(
  "https://fakestoreapi.com/products/categories"
);
</script>

<style lang="scss" scoped>
.categories-wrapper {
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  background-color: $turquoise;
  outline: 1px solid transparent;

  h2 {
    font-size: 1.5rem;
    font-weight: 800;
  }
  nav {
    position: sticky;
    top: 0;
    height: fit-content;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: baseline;
    gap: 1rem;
    width: max-content;
    li {
      list-style: none;
      font-size: 1rem;
      background-color: $elephant;
      border-radius: 10px;
      cursor: pointer;

      &:hover {
        background-color: $easternBlue;
      }

      a {
        text-decoration: none;
        padding: 1rem;
        display: inline-block;
        color: white;
      }
      .router-link-exact-active {
        text-decoration: underline;
      }
    }
  }
}
</style>
