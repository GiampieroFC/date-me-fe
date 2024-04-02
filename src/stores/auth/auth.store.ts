import { create } from 'zustand';

export enum AuthStatus {
  auth,
  pending,
  unAuth,
}

interface AuthState {
  isAuthenticated: AuthStatus;
  sender?: Record<string, any>;
}

interface AuthAction {
  setAuthenticated: (isAuth: AuthStatus, sender?: Record<string, any>) => void;
}

export const useAuthStore = create<AuthState & AuthAction>()((set) => ({
  isAuthenticated: AuthStatus.pending,
  sender: undefined,
  setAuthenticated: (isAuth: AuthStatus, sender?: Record<string, any>) => set(() => ({ isAuthenticated: isAuth, sender })),
}));
