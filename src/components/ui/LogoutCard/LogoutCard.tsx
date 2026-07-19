import { memo } from 'react'
import { LogOut } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import ProfileMenuSection from '../ProfileMenuSection/ProfileMenuSection'
import ProfileMenuItem from '../ProfileMenuItem/ProfileMenuItem'
import { useAuthStore } from '../../../store/auth.store'

/**
 * Account logout row. Clears the auth store (its `persist` middleware syncs
 * the same clear to localStorage) and returns to Login — `replace: true` so
 * the back button can't land the user back on this protected page.
 */
const LogoutCard = memo(() => {
  const navigate = useNavigate()
  const logout = useAuthStore((state) => state.logout)

  const handleLogout = () => {
    logout()
    navigate('/login', { replace: true })
  }

  return (
    <ProfileMenuSection>
      <ProfileMenuItem
        icon={<LogOut size={20} strokeWidth={2} />}
        label="Log Out"
        tone="danger"
        onClick={handleLogout}
      />
    </ProfileMenuSection>
  )
})

LogoutCard.displayName = 'LogoutCard'

export default LogoutCard
