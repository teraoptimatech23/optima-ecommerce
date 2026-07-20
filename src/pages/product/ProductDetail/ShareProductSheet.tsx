import { useState } from 'react'
import { Link2 } from 'lucide-react'
import BottomSheet from '../../../components/ui/BottomSheet/BottomSheet'
import OutlineButton from '../../../components/ui/Button/OutlineButton'
import Toast from '../../../components/ui/Toast/Toast'
import { SHARE_OPTIONS } from '../../../data/shareOptions'
import styles from './ShareProductSheet.module.less'

interface ShareProductSheetProps {
  open: boolean
  onClose: () => void
  productId: string
}

// No real product routing/short-link service yet — mock URL per the spec.
const buildProductUrl = (productId: string) =>
  `https://optima-commerce.com/product/${productId}`

/**
 * Share sheet content for Product Detail. Platform actions are placeholders
 * (see src/data/shareOptions.tsx) — swap each `share` function for
 * navigator.share(), a deep link, or a social SDK call later without
 * touching this component.
 */
const ShareProductSheet = ({ open, onClose, productId }: ShareProductSheetProps) => {
  const [toastOpen, setToastOpen] = useState(false)
  const productUrl = buildProductUrl(productId)

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(productUrl)
      setToastOpen(true)
    } catch {
      // Clipboard permission denied/unavailable — nothing else to do here.
    }
  }

  return (
    <>
      <BottomSheet
        open={open}
        onClose={onClose}
        title="Share Product"
        subtitle="Share this product with your friends."
      >
        <button type="button" className={styles.copyLink} onClick={handleCopyLink}>
          <Link2 size={20} strokeWidth={2} />
          Copy Link
        </button>

        <div className={styles.platformGrid}>
          {SHARE_OPTIONS.map((option) => (
            <button
              key={option.id}
              type="button"
              className={styles.platform}
              onClick={() => option.share(productUrl)}
              aria-label={`Share via ${option.name}`}
            >
              <span className={styles.platformIcon}>{option.icon}</span>
              <span className={styles.platformName}>{option.name}</span>
            </button>
          ))}
        </div>

        <OutlineButton onClick={onClose}>Cancel</OutlineButton>
      </BottomSheet>

      <Toast
        open={toastOpen}
        message="Link copied successfully"
        onClose={() => setToastOpen(false)}
      />
    </>
  )
}

export default ShareProductSheet
