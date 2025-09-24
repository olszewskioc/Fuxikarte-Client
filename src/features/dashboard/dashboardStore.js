import { create } from "zustand";

const useDashStore = create((set) => ({
    filters: null,
    setFilters: (data) => set({filters: data})
}))

export default useDashStore;