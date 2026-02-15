import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(
  persist(
    (set, get) => ({
      // State
      cart: [],
      isCartOpen: false,

      // Actions
      addToCart: (product) => {
        set((state) => {
          const existingItem = state.cart.find((item) => item.id === product.id);

          if (existingItem) {
            // If product exists, increment quantity
            return {
              cart: state.cart.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            };
          } else {
            // If new product, add with quantity 1
            return {
              cart: [...state.cart, { ...product, quantity: 1 }],
            };
          }
        });
      },

      removeFromCart: (productId) => {
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== productId),
        }));
      },

      updateQuantity: (productId, newQuantity) => {
        if (newQuantity < 1) {
          get().removeFromCart(productId);
          return;
        }

        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === productId ? { ...item, quantity: newQuantity } : item
          ),
        }));
      },

      clearCart: () => {
        set({ cart: [] });
      },

      // Cart drawer controls
      toggleCart: () => {
        set((state) => ({ isCartOpen: !state.isCartOpen }));
      },

      openCart: () => {
        set({ isCartOpen: true });
      },

      closeCart: () => {
        set({ isCartOpen: false });
      },

      // Computed values (using getters)
      get cartItemCount() {
        return get().cart.reduce((total, item) => total + item.quantity, 0);
      },

      get cartTotal() {
        return get().cart.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
      },
    }),
    {
      name: "kandy-baby-cart", // localStorage key
      partialialize: (state) => ({ cart: state.cart }), // Only persist cart, not isCartOpen
    }
  )
);