import { create } from "zustand";

const useAuthStore = create((set) => ({
    filters: null,
    setFilters: (data) => set({filters: data})
}))

export default useAuthStore;