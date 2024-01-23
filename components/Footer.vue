<script setup></script>
<template>
  <div class="container">
    <div></div>
    <footer>
      <ul class="firstList">
        <li>Glasspaper deler</li>
        <li>Konsernledelse</li>
        <li>Ofte stilte spørsmål</li>
        <li>Våre lokasjoner</li>
        <li>Våre selskaper</li>
      </ul>
      <ul class="secondList">
        <li>Privacy and Cookie policy</li>
        <li>Legal Terms of Service</li>
        <li>Copyright og Trademark</li>
      </ul>
    </footer>
    <div></div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  background-color: $elephant;
  color: white;
}
footer {
  display: flex;
  margin-inline: auto;
  width: max-content;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  align-items: center;
  padding-block: 60px;
}
ul {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
}

li {
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
}

.icons {
  display: flex;
  gap: 1rem;
}

.icon {
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.firstList {
  font-weight: 600;
}

.secondList {
  font-weight: 100;
}

.router-link-exact-active {
  text-decoration: underline;
}

@media (min-width: 768px) {
  footer {
    flex-direction: row;
    width: 100%;
  }

  .firstList {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2.1rem 9.4rem;
  }

  .secondList {
    margin-left: auto;
    gap: 2.3rem;
    align-items: flex-start;
  }

  .icon {
    width: 30px;
    height: 30px;
  }
}
</style>
