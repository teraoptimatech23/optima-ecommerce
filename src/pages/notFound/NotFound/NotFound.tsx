import { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import Placeholder from '../../placeholder/Placeholder/Placeholder'

/**
 * Global fallback for unmatched routes — wired as the router's wildcard
 * (`*`) route in App.tsx. Reuses Placeholder (same Empty Page illustration/
 * layout as TASK-011) with 404-specific copy and a single "Back to Home"
 * action; no secondary button per the Not Found design.
 */
const NotFound = memo(() => {
  const navigate = useNavigate()

  return (
    <Placeholder
      title="Page Not Found"
      description="The page you are looking for does not exist or may have been moved."
      buttonText="Back to Home"
      buttonAction={() => navigate('/home')}
      secondaryButtonText={null}
    />
  )
})

NotFound.displayName = 'NotFound'

export default NotFound
