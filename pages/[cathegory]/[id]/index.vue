<template>
  <div>
    <h2>cathegory and id</h2>
    <p>Cathegory: {{ params.cathegory }}</p>
    <p>ID: {{ params.id }}</p>
  </div>
</template>

<script setup>
const { params } = useRoute();
</script>

<style lang="scss" scoped></style>
