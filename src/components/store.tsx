import { create } from "zustand";

export const usePerson = create((set) => ({
    storePerson: {},
    setPerson: (params: any) => {
        set((state: any) => ({
            ...state,
            storePerson: params,
        }));
    },
}));
