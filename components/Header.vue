<template>
  <header class="header">
    <div class="wrapper">
      <div>
        <NuxtLink to="/">
          <img
            src="../assets/logo/GroupglassPaperLogo.png"
            alt="glassPaper logo"
            class="logo"
          />
        </NuxtLink>
      </div>
    </div>
  </header>
</template>

<script setup>
const isOpen = ref(false);
</script>

<style lang="scss" scoped>
.logo {
  cursor: pointer;
}
.wrapper {
  display: flex;
  padding-inline: 19.53%;
  justify-content: center;
  align-items: center;
  height: 140px;
}

.header {
  background-color: $easternBlue;
  min-height: 140px;
  color: white;
}
</style>
