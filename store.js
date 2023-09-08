import create from 'zustand';

// Create a Zustand store
const usePackageStore = create((set) => ({
  balance: 0, // Initial balance value

  // Function to set the balance
  setBalance: (newBalance) => set({ balance: newBalance }),

  // Function to update the balance (add or subtract)
  updateBalance: (amount) => set((state) => ({ balance: state.balance + amount })),


  userToken: localStorage.getItem('userToken') || null,
  login: (token) => {
    set({ userToken: token });
    localStorage.setItem('userToken', token);
  },
  logout: () => {
    set({ userToken: null });
    localStorage.removeItem('userToken');
  },


}));



export default usePackageStore;
