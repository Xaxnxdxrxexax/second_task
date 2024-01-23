<script setup>
const props = defineProps({
  error: Object,
});

const handleError = () => clearError({ redirect: "/" });
//TODO: the error replaces the whole layout, is there a better way?
</script>

<template>
  <div>
    <h2>{{ error.statusCode }}</h2>
    <p>{{ error.message }}</p>
    <button @click="handleError">Back to home page</button>
  </div>
</template>

<style lang="scss" scoped>
div {
  position: absolute;
  inset: 0;
  display: grid;
  place-content: center;
  gap: 1rem;
  padding-inline: 1rem;
  background-color: $cyan;
  color: $easternBlue;
  text-align: center;

  h2 {
    font-size: 3rem;
    font-weight: 800;
  }

  p {
    font-size: 1.5rem;
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
}
</style>
