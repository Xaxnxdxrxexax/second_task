<template>
  <div>
    <h2>cathegory page</h2>
    <p>Cathegory: {{ params.cathegory }}</p>
  </div>
</template>

<script setup>
const { params } = useRoute();
</script>

<style lang="scss" scoped></style>
