<template>
  <Header />
  <div>
    <Categories />
    <slot />
    <Cart />
  </div>
  <Footer />
</template>

<style scoped>
div {
  display: grid;
  position: relative;
  grid-template-columns: 1fr 4fr 1fr;
  max-width: 1920px;
  margin-inline: auto;
}
</style>
