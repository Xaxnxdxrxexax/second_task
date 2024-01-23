<template>
  <!-- TODO: not good practice to add classes here? -->
  <Header />
  <div class="wrapper">
    <Categories />
    <slot />
    <Cart />
  </div>
  <Footer />
</template>

<style lang="scss" scoped>
.wrapper {
  display: grid;
  position: relative;
  grid-template-columns: 1fr 4fr 1fr;
  max-width: 1920px;
  margin-inline: auto;
  background-color: $cyan;
}
</style>
