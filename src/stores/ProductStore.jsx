import { create } from "zustand";

const useProductStore = create(() => ({
  products: [
    { id: 1, name: "Produit A", price: 100 },
    { id: 2, name: "Produit B", price: 150 },
    { id: 3, name: "Produit C", price: 200 },
  ],
}));

export default useProductStore;
