export interface User {
  id: number
  name: string
  phone: string
  email: string
  avatar: string
}

// Sole mock account for the temporary mock-auth flow (see
// src/services/auth.service.ts). Replace with a real API response once a
// backend exists.
export const mockUser: User = {
  id: 1,
  name: 'Tera',
  phone: '081211112222',
  email: 'tera@example.com',
  avatar: '',
}
