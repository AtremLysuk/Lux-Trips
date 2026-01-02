import { create } from 'zustand';

export const useItemsStore = create((set, get) => ({
  packagesItems: [],
  isLoading: false,
  isError: false,

  fetchPackagesItems: async () => {
    set({ isLoading: true });

    try {
      const res = await fetch('/data.json');
      const data = await res.json();

      set({
        packagesItems: [...data],
      });

      set({ isLoading: false });
    } catch (error) {
      console.log(error.message);
      set({ isError: true });
    } finally {
      set({ isLoading: false });
    }
  },

}));
