import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { User } from '../data/user'

interface AuthState {
  user: User | null
  isAuthenticated: boolean
  login: (user: User) => void
  logout: () => void
}

/** Persisted to localStorage so the session survives a page refresh. */
export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      login: (user) => set({ user, isAuthenticated: true }),
      logout: () => set({ user: null, isAuthenticated: false }),
    }),
    { name: 'optima-auth' },
  ),
)
