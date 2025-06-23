import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
}

interface CartItem {
  id: string;
  title: string;
  price: number;
  image: string;
  category: string;
  quantity: number;
}

interface AppState {
  // User state
  user: User | null;
  isAuthenticated: boolean;
  setUser: (user: User | null) => void;
  
  // Cart state
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  
  // UI state
  searchQuery: string;
  selectedCategory: string;
  setSearchQuery: (query: string) => void;
  setSelectedCategory: (category: string) => void;
  
  // Modals
  authModalOpen: boolean;
  cartModalOpen: boolean;
  setAuthModalOpen: (open: boolean) => void;
  setCartModalOpen: (open: boolean) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      // User state
      user: null,
      isAuthenticated: false,
      setUser: (user) => set({ user, isAuthenticated: !!user }),
      
      // Cart state
      cart: [],
      addToCart: (item) => {
        const { cart } = get();
        const existingItem = cart.find(cartItem => cartItem.id === item.id);
        
        if (existingItem) {
          set({
            cart: cart.map(cartItem =>
              cartItem.id === item.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
            )
          });
        } else {
          set({ cart: [...cart, { ...item, quantity: 1 }] });
        }
      },
      removeFromCart: (id) => {
        set({ cart: get().cart.filter(item => item.id !== id) });
      },
      updateQuantity: (id, quantity) => {
        if (quantity <= 0) {
          get().removeFromCart(id);
          return;
        }
        set({
          cart: get().cart.map(item =>
            item.id === id ? { ...item, quantity } : item
          )
        });
      },
      clearCart: () => set({ cart: [] }),
      
      // UI state
      searchQuery: '',
      selectedCategory: 'all',
      setSearchQuery: (query) => set({ searchQuery: query }),
      setSelectedCategory: (category) => set({ selectedCategory: category }),
      
      // Modals
      authModalOpen: false,
      cartModalOpen: false,
      setAuthModalOpen: (open) => set({ authModalOpen: open }),
      setCartModalOpen: (open) => set({ cartModalOpen: open }),
    }),
    {
      name: 'giftcode-store',
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        cart: state.cart,
      }),
    }
  )
);