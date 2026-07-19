import { mockUser } from '../data/user'
import type { User } from '../data/user'

const MOCK_PHONE = '081211112222'
const MOCK_PASSWORD = 'tera123'
const INVALID_CREDENTIALS_MESSAGE = 'Nomor telepon atau password salah.'

export interface LoginResult {
  success: boolean
  user?: User
  message?: string
}

/**
 * Mock login for development. Validates against a single hardcoded
 * credential pair and resolves asynchronously, the same shape a real
 * request would. To wire up the real backend, replace the body with a
 * `POST /api/auth/login` call (via axios) that resolves/rejects into this
 * same `LoginResult` shape — callers (the Login page, the auth store)
 * don't need to change.
 */
export const login = (identifier: string, password: string): Promise<LoginResult> =>
  new Promise((resolve) => {
    setTimeout(() => {
      if (identifier === MOCK_PHONE && password === MOCK_PASSWORD) {
        resolve({ success: true, user: mockUser })
      } else {
        resolve({ success: false, message: INVALID_CREDENTIALS_MESSAGE })
      }
    }, 400)
  })
