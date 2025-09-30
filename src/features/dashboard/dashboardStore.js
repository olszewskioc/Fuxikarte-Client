import { create } from "zustand";
import { persist } from "zustand/middleware";

const useDashStore = create(
    persist(
        (set) => ({
            filters: null,
            setFilters: (data) => set({ filters: data }),
        }),
        {
            name: "fuxikarte-dash-filters", // chave no localStorage
            partialize: (state) => ({ filters: state.filters }), // evita salvar funções
        }
    )
);

export default useDashStore;