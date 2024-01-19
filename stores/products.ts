import type { Product } from "~/server/api/products";

export const useProductsStore = defineStore("products", {
  state: () => ({
    products: [] as Product[],
  }),
  actions: {
    async fetch() {
      const data = (await $fetch("/api/products")) as Product[];
      this.products = data;
    },
  },
});
