<template>
  <form @submit.prevent="handleSubmit">
    <input
      type="text"
      placeholder="Product title"
      id="title"
      v-model="newProduct.title"
    />
    <input
      type="tel"
      placeholder="Price"
      v-model="newProduct.price"
      id="price"
    />
    <input
      type="text"
      name=""
      id="description"
      placeholder="description"
      v-model="newProduct.description"
    />
    <input
      type="text"
      name=""
      id="category"
      placeholder="category"
      v-model="newProduct.category"
    />
    <input
      type="text"
      id="image"
      v-model="newProduct.image"
      placeholder="image link"
    />
    <button type="submit">Add Product</button>
  </form>
</template>

<script setup>
import { v4 as uuidv4 } from "uuid";
// const { data } = await useFetch("/api/products", {
//   method: "POST",
//   body: {
//     title: "test",
//     price: 10,
//     description: "test",
//     category: "test",
//     image: "test",
//   },
// });

const store = useProductsStore();
const newProduct = ref({
  title: "",
  price: "",
  description: "",
  category: "",
  image: "",
});
const handleSubmit = () => {
  if (newProduct.value.title && +newProduct.value.price > 0) {
    if (newProduct.value.image === "") {
      newProduct.value.image =
        "https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg";
    }
    store.addProduct({
      ...newProduct.value,
      id: uuidv4(),
    });
    newProduct.value = {
      title: "",
      price: "",
      description: "",
      category: "",
      image: "",
    };
  }
};
</script>

<style lang="scss" scoped></style>
