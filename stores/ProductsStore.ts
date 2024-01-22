import type { Product } from "~/server/api/products";

export const useProductsStore = defineStore("products", {
  state: () => ({
    isLoading: false,
    products: [] as Product[],
    cart: [] as Product[],
  }),
  getters: {
    prodLength(): number {
      return this.products.length;
    },
    cartTotal(): number {
      return this.cart.reduce((c, p) => c + p.price, 0);
    },
  },
  actions: {
    async getProducts() {
      this.isLoading = true;
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      this.products = data;
      this.isLoading = false;
    },
    async addProduct(product: Product) {
      this.products.push(product);
      try {
        const res = await fetch("https://fakestoreapi.com/products", {
          method: "POST",
          body: JSON.stringify(product),
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log(res.json());
      } catch (error) {
        console.log(error);
      }
    },
    async updateProduct(product: Product) {
      this.products = this.products.map((p) => {
        if (p.id === product.id) {
          return product;
        } else {
          return p;
        }
      });
      try {
        const res = await fetch("api/products/" + product.id, {
          method: "PUT",
          body: JSON.stringify(product),
          headers: {
            "Content-Type": "application/json",
          },
        });
      } catch (error) {
        console.log(error);
      }
    },
    async deleteProduct(id: number) {
      this.products = this.products.filter((product) => product.id !== id);
      try {
        const res = await fetch("api/products/" + id, {
          method: "DELETE",
        });
      } catch (error) {
        console.log(error);
      }
    },
    addToCart(product: Product) {
      this.cart.push(product);
    },
    removeFromCart(id: number) {
      this.cart = this.cart.filter((product) => product.id !== id);
    },
  },
});
