import type { Product } from "~/server/api/products";
// TODO: is there a better way to do this?
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
      return +this.cart.reduce((c, p) => c + p.price, 0).toFixed(2);
    },
  },
  actions: {
    async getProducts() {
      this.isLoading = true;
      const res = await fetch("https://fakestoreapi.com/products?sort=desc");
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
        const res = await fetch(
          "https://fakestoreapi.com/products/" + product.id,
          {
            method: "PUT",
            body: JSON.stringify(product),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
      } catch (error) {
        console.log(error);
      }
    },
    async deleteProduct(id: number) {
      if (window.confirm("Are you sure you want to delete this product?")) {
        this.products = this.products.filter((product) => product.id !== id);
        this.cart = this.cart.filter((product) => product.id !== id);
        try {
          const res = await fetch("https://fakestoreapi.com/products/" + id, {
            method: "DELETE",
          });
        } catch (error) {
          console.log(error);
        }
      }
    },
    addToCart(product: Product) {
      this.cart.push(product);
    },
    removeFromCart(id: number) {
      this.cart = this.cart.filter((product) => product.id !== id);
    },
    emptyCart() {
      if (window.confirm("Are you sure you want to clear the cart?")) {
        this.cart = [];
      }
    },
  },
});
