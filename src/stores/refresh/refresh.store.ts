import { create } from "zustand";

interface Refresh {
    changed: boolean;
    refresh: () => void;
}

export const useRefresh = create<Refresh>()((set, get) => ({
    changed: false,
    refresh: () => set({ changed: !get().changed }),
}));