import { create } from "zustand";

export const useStore = create((set) => ({
    storeListCart: [],
    setStore: (params: any) => {
        set((state: any) => {
            return {
                ...state,
                storeListCart: params,
            };
        });
    },
}));
