import create from 'zustand';

// Create a Zustand store
const useBalanceStore = create((set) => ({
  balance: 0, // Initial balance value

  // Function to set the balance
  setBalance: (newBalance) => set({ balance: newBalance }),

  // Function to update the balance (add or subtract)
  updateBalance: (amount) => set((state) => ({ balance: state.balance + amount })),
}));

export default useBalanceStore;
