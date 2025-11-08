import { create } from "zustand";
import { Product } from "@/lib/data";

interface ProductStore {
  products: Product[];
  setProducts: (products: Product[]) => void;
  removeProduct: (id: number) => void;
}

export const useProductStore = create<ProductStore>((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
  removeProduct: (id) =>
    set((state) => ({
      products: state.products.filter((p) => p.id !== id),
    })),
}));
